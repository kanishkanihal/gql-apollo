# gql-apollo

Graphql basic with Apollo server

# Query seller
query {
  seller {
    name
    book {
      id
 	isbn
    	title
    	subtitle
    }
  }
}
# Query book
query {
  book {
    title
    subtitle
    author  {
      name
    }
    seller{
      name
    }
  }
}

# Query author
query {
  author{
    name
    book {

 	isbn
    	title
    	subtitle
    }
  }
}

#Add author
mutation {
  addAuthor(
    name: "Martin Wickramasinghe"
  ) {
    id
    name
  }
}

#update author
mutation{
  updateAuthor(id:6,name:"Lama Hewage Don Martin Wickramasinghe")
}
#delete author
mutation{
  deleteAuthor(id:6)
}
#Add book
mutation {
  addBook(
    isbn: "05479532456", 
    title: "Teachers", 
    subtitle: "Its out teacher"
    author:3,
    seller:[4,3]
  ){
    title
    id
    isbn
    subtitle
    author  {
      name
    }
    seller{
      name
    }
  }
}
#Update book
mutation {
  updateBook(
    id:3,
    isbn: "05479532456", 
    title: "Fire Fighters", 
    subtitle: "Story of our heros"
    author:1,
    seller:[1,4]
	)
}
#Delete book
mutation{
  deleteBook(id: 32)
}
#Add seller
mutation{
  addSeller(
    name: "MD Gunasena"
  ){
    name
  }
}
#Update seller
mutation{
  updateSeller(
    id:6,
  	name:"MDG"
  )
}
#Delete seller
mutation{
  deleteSeller(id:6)
}

