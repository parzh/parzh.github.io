#!/usr/bin/env bash

filenames="$(find . -name *.spec.js)"
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
