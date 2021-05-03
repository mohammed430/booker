const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./config');
const book = require('./models/book');



app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
sequelize.authenticate().then(function(){
    console.log('Database is connected');
}).catch(function(err){
    console.log(err);
});



app.get('/',function(req,res){
    book.findAll().then(function(results){
        res.send(results);

    }).catch(function(err){
        res.send(err);
    });

});

app.post('/', function(req, res){
  let data = {
    id: req.body.id,
    image: req.body.image,
    contact_name: req.body.contact_name,
    phone: req.body.phone,
    email: req.body.email,
    abstract: req.body.abstract,
    author: req.body.author,
    title: req.body.title,
    published_date: req.body.published_date,
    category: req.body.category
  
};

book.create(data).then(function(result){
    res.redirect('/');
}).catch(function(err){
    res.send(err);
});
});

app.get('/', function(req, res){
  book.findAll().then(function(result){
      res.send(result);
  }).catch(function(err){
      res.send(err)
  });
});


app.get('/:id', function(req, res){
  let id = req.params.id;

  book.findByPk(id).then(function(result){
      res.send(result)
  });

});


app.put('/:id', function(req, res){
  let id = req.params.id;

  book.findByPk(id).then(function(result){

    //Borrowing a book
    if(result.status === 'available'){
        result.borrowedBy = req.body.borrowedBy;
        result.status = 'unavailable';
    }
    //Returning a borrowed book
    else{
        if(result.borrowedBy === req.body.borrowedBy){
            result.borrowedBy = '';
            result.status = 'available';
        }
        else{
            res.status(400).send([]);
            return;
        }
    }
      
     
      
      //Update
      result.save().then(function(){
          res.status(200).send([])
      }).catch(function(err){
          res.send(err);
      });       
  }).catch(function(err){
      res.send(err);
  });
});

app.delete('/:id', function(req, res){
  let id = req.params.id;

  book.findByPk(id).then(function(result){
      result.destroy().then(function(){
          res.redirect('/')
      }).catch(function(err){
          res.send(err);
      });       
  }).catch(function(err){
      res.send(err);
  });
});

app.listen(3000, function(){
    console.log('server is running on port 3000');
})