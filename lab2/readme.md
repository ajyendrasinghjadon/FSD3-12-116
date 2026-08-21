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



# File System (FS Module)

# CRUD Project
assume we are making a cart related project

1. user can add any product (id, name, price, qty) into cart.
2. user can see all the items of the cart
3. user can remove item from cart
4. user can also update quantity of product
5. all the items should be stored after termination of project