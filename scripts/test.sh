#!/usr/bin/env bash

filenames="$(find . -name *.spec.js)"
exit_code=0

for filename in $filenames
do
	echo -e "Running $filename ..."

	# ***

	time_start="$(node -pe "Date.now()")"
	node "$filename"
	node_exit_code=$?
	time_took=$(node -pe "(Date.now() - $time_start) / 1e3")

	# ***

	if [ $node_exit_code -eq 0 ]
	then
		result="passed"
	else
		result="failed"
		exit_code=1
	fi

	echo -e "$result (in $time_took seconds)\n"
done

exit $exit_code
