#!usr/bin/env bash

filenames="$(find . -name *.spec.js)"

for filename in $filenames
do
	echo "Running $filename ...";
	node "$filename";
done
