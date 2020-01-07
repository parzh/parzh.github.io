#!/usr/bin/env bash

random_token=$RANDOM
result_value=${NPM_SCRIPT:-$random_token}

if [ $result_value = $random_token ]
then
	npm test
	exit $?
else
	export PACKAGE_HOME=$(pwd)
	echo -e "PACKAGE_HOME=$PACKAGE_HOME\n"
fi

tests_dir="$PACKAGE_HOME/test"
filenames="$(find $tests_dir -name *.spec.ts)"
filenames_array=(${filenames// / })
echo -e "Found ${#filenames_array[@]} tests\n"

main_exit_code=0

for filename in $filenames
do
	echo "Running $filename ..."

	# ***

	time_start="$(node -pe "Date.now()")"
	node --require="ts-node/register" --require "$PACKAGE_HOME/scripts/before-each.js" "$filename"
	test_exit_code=$?
	time_total=$(node -pe "(Date.now() - $time_start) / 1e3")

	# ***

	if [ $test_exit_code -eq 0 ]
	then
		echo -ne "\e[1;42m PASS \e[0m "
	else
		echo -ne "\e[1;41m FAIL \e[0m "
		main_exit_code=1
	fi

	echo "(took $time_total seconds)"
	echo ""
done

exit $main_exit_code
