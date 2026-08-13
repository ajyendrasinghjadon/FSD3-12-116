## File System (FS Moduule)
- fs module directly commmunicate with system rather than browser the common operations on a file or folder are: 
1. Read File Write File Append File
2. Folder 
 - mkdir, rmdir, readdir
3. File Metadat
 - Stat, lStat, rStat
4. Watch
 - Watch , Unwatch
5. Stream
 - readStream()
 - writeStream()


 All functions are proomise so it must be called with await

 - writeFile writes a new file and if the file already exists it overwrites it.
 - appendFile adds data to the file instead of overwriting as writeFile does.


 - how to handle runtime errros ?
  * by using try, catch, finally, throw