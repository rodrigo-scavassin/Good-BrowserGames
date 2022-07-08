users = []

const index = (req,res) => {
    console.log("Render de signup funcionou!")
    res.render("home/signup");
}

const signup = (req,res) => {
    console.log("Metodo signup iniciou!")
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
          name: req.body.email,
          cpf: req.body.cpf,
          senha: hashedPassword,
          datanascimento: req.body.datanascimento
        })
        res.redirect('/login')
        console.log(users)
      } catch {
        res.redirect('/signup')
      }
    }

    export default {
        index,
        signup,
    
      };