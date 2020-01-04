#!/usr/bin/env bash

random_token=$RANDOM
result_value=${NPM_SCRIPT:-$random_token}

if [ $result_value = $random_token ]
then
	npm test
	exit 0
else
	export PACKAGE_HOME=$(pwd)
	echo -e "PACKAGE_HOME=$PACKAGE_HOME\n"
fi

filenames="$(find $PACKAGE_HOME -name *.spec.js)"
filenames_array=(${filenames// / })
echo -e "Found ${#filenames_array[@]} tests\n"

exit_code=0

for filename in $filenames
do
	echo "Running $filename ..."

	# ***

	time_start="$(node -pe "Date.now()")"
	node "$filename"
	node_exit_code=$?
	time_total=$(node -pe "(Date.now() - $time_start) / 1e3")

	# ***

	if [ $node_exit_code -eq 0 ]
	then
		echo -ne "\e[1;42m PASS \e[0m "
	else
		echo -ne "\e[1;41m FAIL \e[0m "
		exit_code=1
	fi

	echo "(took $time_total seconds)"
	echo ""
done

exit $exit_code
