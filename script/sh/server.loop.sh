#!/bin/sh

n=0

while (true)
do
	n=$(( n+1 ))
	echo "Welcome $n times."
	node "../../script/js/server.js"
done