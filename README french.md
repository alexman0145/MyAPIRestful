## Introduction

Il est recommandé de démarrer un Codespace pour utiliser ce repose, assurer vous que vous êtes bien sur la branche auto. Ce depôt comme mentionner est utilisé por créer des produits juste pour s'amumer ;).

Tu as à ta disposition 2 projets et une base de données :

- Un projet de type back-end qui est utilisé pour la gestion des données et de l'API qui est de type Restful

- Un projet de type front-end pour l'interface graphique en web qui utilise un framework Angular (Pour plus d'information pour ce framework allez à cette adresse <a href="https://angular.dev/overview">https://angular.dev/overview)</a>.

## Etape 1 :

Si tu démarre un codespace, assure-toi que le script ``` setup.sh ``` et le conteneur ```docker-compose.yml``` est prèsent.

Insérer la commande suivante dans un Terminal

```bash

bash setup.sh
```

Cette commande permet de configurer la base de donné et les deux projets.

Note : Tu peux modifier le nom de base de données depuis le fichier ``` appsettings.json ``` dans le projet MonApiRestful.

Remplace dans ``` Database=Price2 ``` par le nom de ta base de donné au choix.

```json
"DefaultConnection": "Server=localhost,9595;Database=Price2;User Id=SA;Password=Password123456789;Encrypt=True;TrustServerCertificate=True;"
```

## Etape 2:

Après avoir patientez, démmarez une connexion à votre base de donné.

Tu peux utiliser une extension dans vscode ```mssql (server)``` ou utilser le logiciel DBeaver

## Etape pour Vscode

Installer l'extension appelez ``` SQL Server (mssql)  ```

Après avoir patientez une icone de type server est ajoutez, clicker dessus.

Clicker sur le button "+".

![Capture d'écran 2024-12-28 195029](https://github.com/user-attachments/assets/59b62f59-06f8-4d00-a972-46af31eedb30)

Entrer le nom du produit ou laisser le vide

Tu as le choix entre ``` Parametre ```, ```Connection string ``` et ``` Browse Azure ```

- Parameter :

Tu auras besoin de la chaine de connexion pour t'aider

``` json
"DefaultConnection": "Server=localhost,9595;Database=Price2;User Id=SA;Password=Password123456789;Encrypt=True;TrustServerCertificate=True;"
```

Depuis la chaîne de connexion entrer les informations dans chaque case :

Server name : ``` localhost ```

- Cochez la case "Trust server certificate " car il est mentionnez dans la chaine de connexion ``` TrustServerCertificate=True;  ```

- Authentification type, laissez le en ```SQL login ```

- User name : ``` SA ```

- Password : ``` Password123456789 ```

- Tu peux choisir si le programme memorise ou non ton mot de passe à chaque connexion

- Database name : Ta base de donné à un nom par défaut qui est ``` Price2 ``` ou ``` owl ``` mais ``` owl ``` n'utilise pas la table produit donc attention.

- Encrypt : Je ne sais pas, essayez ``` mandatory ``` ou toutes les option globallement je suprimerais cette option

  Après cela clicker sur Connect

  Si cela ne marche pas essayer Connection String dans ```Input type ```

  Copier et collez la chaine de connexion et clicker sur connect

  Félicitations la base de donné fonctionne

  ![image](https://github.com/user-attachments/assets/be3f6aff-2f2c-4d0e-b5a9-a16ff4b4804d)

  Etape DBeaver :

  Si tu veux utilisez DBeaver

  Démarrer le logiciel DBeaver

  Clique sur le button en forme de prise en haut à gauche.
  
  ![image](https://github.com/user-attachments/assets/03b4def6-6318-442f-812c-8645e0628a8b)

  Cliquez sur SQL Server ou sur nouvelle connexion

  Si tu clique sur Nouvelle connexion choisis SQL Server

  ![image](https://github.com/user-attachments/assets/fad7ef65-c52a-4f62-8783-a94c94e216f8)

  Entrez les information de Connexion

  ![image](https://github.com/user-attachments/assets/fdd79dcb-e05e-4f55-9a0a-ee4271c1f570)

  Felicitations la base de données fonctionne

  ![image](https://github.com/user-attachments/assets/2ee85012-30d6-45c1-ad16-b3a98b80fa3f)

  ## Etape 3

  Tu peux démarrer cette commande pour démarrer l'API back end

  ``` bash
  cd MonApiRestful
  dotnet run
  ```

  Globalement le message dit :

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

  Dans le naviguateur entrer cette URL et ajoutez ``` /swagger ``` pour accèder aux swagger

  Tu peux maintenant ajoutez, vérifiez, renommez et suprimmer un produits

  ![image](https://github.com/user-attachments/assets/54d77b95-ec08-415a-ae54-719987dc4a92)

  Tu as 4 méthodes à ta dispositions :

  ``` GET ``` : Cette methode permet de recherchez le produit

  ``` POST ``` : Cette methode ajoute un produit dans la base de donné

  ``` PUT ``` : Cette methode renomme un produit dans la base de donné

  ``` DELETE ``` : Cette methode suprime un produit dans la base de donné

  Pour ajouter un produit cliquer sur la methode POST

  Cliquez ensuite sur ``` Try it out```

  ![image](https://github.com/user-attachments/assets/c5796513-b93c-4b05-91fc-cb9b247ef6e0)

  Cliquez sur Execute

  ![image](https://github.com/user-attachments/assets/790800da-655c-4662-9794-14c0aa659253)

  Ton produit à été ajoutez dans la base de donné

 Essaye en utilisant un code SQL pour vérifier le produit

 ``` sql
USE Price2;
SELECT * FROM Price2
```

Ou utilise l'API pour vérifier le produit en utilisant la methode ``` GET ```

Pour renommez un produit tu peux le faire en proccédant à la methode ``` PUT ``` assure toi que l'ID que tu utilise est le bon et vérifie dans la base de donné si ça fonctionne

## Step 4:

Pour utilise le front end tu peux utiliser la commande suivante 

``` bash
ng serve
```

Tape n si tu ignore les propositions
``` bash
Would you like to enable autocompletion? This will set up your terminal so pressing TAB while typing Angular CLI commands will show possible options and autocomplete arguments. (Enabling autocompletion will 
modify configuration files in your home directory.) (Y/n)
```

Felicitaion tu peu utiliser le front end depuis l'URL <a href="http://localhost:4200/"></a>

![image](https://github.com/user-attachments/assets/cab0fc7e-ed49-4f16-a5da-cead1bf5b72f)

Ajouter après le slash ``` /ajouter ``` pour ajouter un produit ou `` modifier/:id ``` pour modifier un produit

Dans cette URL ``` http://127.0.0.1:4200/produits ``` La liste des produits des produits apparaît dans cette page





  


  
  

