require('../src/db/mongoose')
const User = require('../src/models/user')


const _id = '5cf18dce1a8b0d10a21b1efc'



// User.findByIdAndUpdate(_id, {age : 1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({})
// }).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

const UpdateAgeandCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age: age})
    const count = await User.countDocuments({})
    return count
}

UpdateAgeandCount(_id, 30).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
