require('../src/db/mongoose')
const Task = require('../src/models/task')

const _id = '5cf2cfcae012cd2336558770'

// Task.findByIdAndDelete(_id).then(() => {
//     return Task.countDocuments({})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const deletedTask = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({})
    return count
}

deleteTaskAndCount(_id).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})