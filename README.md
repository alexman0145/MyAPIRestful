Note : If you have french go to the README French.md for have a version french

## Introduction

If you recommanded of start a Codespace for to use a repos, make you sure than you be in the auto branch.
This repos like mentionned use to create to products just for fun ;).

- You have at to disposition 2 projects and a database :

- A project of type back-end wich can use a manage of data and the API, it is a type of Resful

- A project of type front-end for the web graphical interface wich use framework a Angular (For more information for this framework go to <a href="https://angular.dev/overview">https://angular.dev/overview)</a>.

## step 1 :

If you start a codespace, Check a script a ```setup.sh``` is present and the ```docker-compose.yml```.

Insert this commande

```bash
bash setup.sh
```
This command use to configured the database and the two projects.

Note : You can edit the database for the creation of product but if you edit a database go to change database from ``` appsettings.json ``` in the project MonApiRestful.

Replace in ```Database=Price2``` by the database of your choice.

```json
"DefaultConnection": "Server=localhost,9595;Database=Price2;User Id=SA;Password=Password123456789;Encrypt=True;TrustServerCertificate=True;"
```
## step 2 :

After have waiting, start a connexion from a database

You can use an extension mssql (server) in vscode or use software DBeaver

## Step for vscode

Install the extension name ```SQL Server (mssql) ``` 

after waiting an icone of type server is add click top

Click to the button "+"



![Capture d'écran 2024-12-28 195029](https://github.com/user-attachments/assets/59b62f59-06f8-4d00-a972-46af31eedb30)



Enter name profile or leave empty

You have the choice begin ```Parameter```, ```Connection string``` and ```Browse Azure```.

We can use 2 solution ```Parameter```or ```Connection string``` :

- Parameter :

You need have a connection string 

``` json
"DefaultConnection": "Server=localhost,9595;Database=Price2;User Id=SA;Password=Password123456789;Encrypt=True;TrustServerCertificate=True;"
```

From the connexion string enter this information In the case :

- Server name : ``` localhost ```
  
- Tick the case "Trust server certificate" because in the connection string said ``` TrustServerCertificate=True; ```
  
- Autenfication type leave in ``` SQL login ```

- User name : ``` SA ```

- Password : ``` Password123456789 ```

- You can choose of Save Password or note in tick the case ```Save Password```

- Database name : Your Database name default ```Price2``` or ```owl``` but ```owl``` don't use table product well be carreful.

- Encrypt : I don't now try ```mandatory``` or any option globally delete this option.

Click to Connect

If don't work try Connection String in ```Input type```

Copy and paste the connection string and click to connect

Congraluations your database work

![image](https://github.com/user-attachments/assets/be3f6aff-2f2c-4d0e-b5a9-a16ff4b4804d)

Step DBeaver :

If you would like use DBeaver

Start a softaware DBeaver

Clique on the plug in up at left

![image](https://github.com/user-attachments/assets/03b4def6-6318-442f-812c-8645e0628a8b)

Click on SQL Server or New connection (French: nouvelle connexion)

If you click New connection choose the SQL Server

![image](https://github.com/user-attachments/assets/fad7ef65-c52a-4f62-8783-a94c94e216f8)

Tap your information of connection

![image](https://github.com/user-attachments/assets/fdd79dcb-e05e-4f55-9a0a-ee4271c1f570)

Congraluations the database work

![image](https://github.com/user-attachments/assets/2ee85012-30d6-45c1-ad16-b3a98b80fa3f)

## Step 3

You can run this command for start the API back end

``` bash
cd MonApiRestful
dotnet run
```

Globally the message said

``` bash
Building...
info: Microsoft.Hosting.Lifetime[14]
      Now listening on: http://localhost:5145
info: Microsoft.Hosting.Lifetime[0]
      Application started. Press Ctrl+C to shut down.
info: Microsoft.Hosting.Lifetime[0]
      Hosting environment: Development
info: Microsoft.Hosting.Lifetime[0]
      Content root path: /workspaces/MyAPIRestful/MonApiRestful

```

In the Browser anter this URL and add ```/swagger``` for access at swagger

You can now add, check, update and delete a product

![image](https://github.com/user-attachments/assets/54d77b95-ec08-415a-ae54-719987dc4a92)

You have 4 method at your disposition :

``` GET ``` : This method take use for search the product

``` POST ``` : Add product in the database

``` PUT ``` : Edit the product

``` DELETE ``` : delete the product in the database

For add a product click on the method POST

Click on ```Try it out ```

![image](https://github.com/user-attachments/assets/c5796513-b93c-4b05-91fc-cb9b247ef6e0)


Click on Execute 


![image](https://github.com/user-attachments/assets/790800da-655c-4662-9794-14c0aa659253)

Your product has been added in the database

Try the code SQL to check the product

``` sql
USE Price2;
SELECT * FROM Price2
```
Or use the API to check the product with method ``` GET ```

For rename a product you can do process like method ``` PUT ``` ensure that the ID than you use is good and Check the Database if work

## Step 4 :

For use the front end you can use the next prompt

``` bash
ng serve
```
Tap n if you decline this proposition

``` bash
Would you like to enable autocompletion? This will set up your terminal so pressing TAB while typing Angular CLI commands will show possible options and autocomplete arguments. (Enabling autocompletion will 
modify configuration files in your home directory.) (Y/n)
```

Congraluations you can use the front end from the URL <a href="http://localhost:4200/"></a>

![image](https://github.com/user-attachments/assets/cab0fc7e-ed49-4f16-a5da-cead1bf5b72f)

add after '/' ```/ajouter ``` for add a products or ``` modifier/:id ``` for edit the product

In this URL ``` http://127.0.0.1:4200/produits ``` the list of procuts appear in this page.

Enjoy it :)













