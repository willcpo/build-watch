## How To Add A Query:
- create a query Object:
    - **flag**: This is the argument that must be added to the run command for this query to be active
    - **regex**: This is the regex that will find the log line you are trying to query for
    - **customExtract**: (line) => string[][] 
         -   This function will take in the string of the current chuck of log lines
         -   it will use Regex to extract parameter values from the log line that you wish to send to the server
         -   it will convert the iterable of all matches to an array

## To test a Query
    - Open up a port listener and listen to port 9998
        -   https://github.com/willcpo/port-listener
    - run "node log-consumer.js | node build-watch.js -QueryFlag "


# TODO Notes:
- Find a way to preprocess this and strip out functions and high level JS to make it run as fast as possible
- Change HTTP to HTTPS?
