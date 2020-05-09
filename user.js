function getUsers(id, Password){
  const users = [
    {
      firstName: 'Tony',
      email: 'tony@stark.com',
      password: 'iamironman'
    },
    {
      firstName: 'Steve',
      email: 'captain@hotmail.com',
      password: 'icandothisallday'
    },
    {
      firstName: 'Peter',
      email: 'peter@parker.com',
      password: 'enajyram'
    },
    {
      firstName: 'Natasha',
      email: 'natasha@gamil.com',
      password: '*parol#@$!'
    },
    {
      firstName: 'Nick',
      email: 'nick@shield.com',
      password: 'password'
    }
  ]
  let userAccount = users.filter((user)=>{
    let userId = user.email
    let userPass = user.password
    return userId === id && userPass === Password
  })
  

  if(userAccount.length === 0) return 'OOPS! 帳號 / 密碼錯誤囉'

  return userAccount[0].firstName
  
}

module.exports = getUsers