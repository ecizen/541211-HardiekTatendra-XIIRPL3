
let users = [
    {id : 1, name: "hardiek", kelas : "XII RPL 3"},
    {id : 2, name: "Jonathan", kelas : "XII RPL 3"},
    {id : 3, name: "Udiiiin", kelas : "XII RPL 3"},
  ]

  module.exports = {
    index: (req, res) => {
        if(users.length > 0){
          res.json({
            status : true,
            data : users,
            method: req.method,
            url: req.url
          })
        } else{
           res.json({
            status: false,
            message: "data masih kosong"
           })
        }
        
        },
        create: (req, res) => {
          users.push(req.body)
          res.json({
            status : true,
            data: users,
            method: req.method,
            url: req.url,
            message: "Data berhasil ditambah"
          })
        },

        update :  (req, res) => {
          const id  = req.params.id
          users.filter( user => {
            if(user.id == id){
              user.name = req.body.name
              user.kelas = req.body.kelas
              return user
    
            }
           
          })
          res.json({
            status : true,
            data: users,
            method: req.method,
            url: req.url,
            message: "Data berhasil diubah"
          })
         
        },
       delete: (req, res) => {
          const id = req.params.id
          users = users.filter(user => user.id != id)
          res.json({
            status : true,
            data: users,
            method: req.method,
            url: req.url,
            message: "Data berhasil dihapus"
          })
      }
    
      
  }

 
   