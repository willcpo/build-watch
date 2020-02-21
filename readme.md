## How To Add A Query:
- create a query Object:
    - flag: This is the argument that must be added to the run command for this query to be active
    - regex: This is the regex that will find the log line you are trying to query for
    - customExtract: (line) => string[][] 
         -   This function will take in the string of the current chuck of log lines
         -   it will use Regex to extract parameter values from the log line that you wish to send to the server
         -   it will convert the iterable of all matches to an array
## To use a Query
    - after your command line statement insert a " | " after to pipe the Standard Output to the Standard input of the next command
    - at the end of your piped expression enter the command to start this program
        - followed by any flags indicating queries you would like to run
    - Example: " exe cmd arg | node build-watch.js -sampleFlag




# TODO Notes:
- Find a way to preprocess this and strip out functions and high level JS to make it run as fast as possible
- Change HTTP to HTTPS?
