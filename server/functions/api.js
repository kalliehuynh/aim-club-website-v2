const path = require('path')
const serverless = require('serverless-http')
const express = require('express')
const app = express()
const cors = require('cors')
const router = express.Router()

// load notion database
require('dotenv').config()
const { Client } = require('@notionhq/client')
const notionSecret = process.env.NOTION_SECRET
const notionDatabaseID = process.env.NOTION_DATABASE_ID
if (!notionDatabaseID || !notionSecret) {
    throw Error('Must define NOTION_SECRET and NOTION_DATABASE_ID in env')
}
const notion = new Client({
    auth: notionSecret,
})

router.get('/', cors(), async (req, res) => {
    const query = await notion.databases.query({
        database_id: notionDatabaseID,
    })

    const list = query.results.map((row) => {
        // JSON processing due to bugs
        const rowProps = JSON.parse(JSON.stringify(row)).properties
        const nameCell = JSON.parse(JSON.stringify(rowProps.Name)).title[0]
        const dateCell = JSON.parse(JSON.stringify(rowProps.Date))
        const locationCell = rowProps.location
        const signupCell = rowProps.signup

        const isName = nameCell.type === 'text'
        const isDate = dateCell.type === 'date'
        const isLocation = locationCell.type === 'rich_text'
        const isSignUp = signupCell.type === 'url'

        if (isName && isDate && isLocation && isSignUp) {
            // Pull the string values of the cells off the column data
            const name = nameCell.plain_text
            const date = dateCell.date
            const location = locationCell.rich_text?.[0].plain_text
            const signup = signupCell.url ?? ''
            return { name, date, location, signup }
        }
        return { name: 'NOT_FOUND', date: {}, location: '', signup: '' }
    })
    res.json(list)
})

app.use('/', router)
app.use(cors())

module.exports.handler = serverless(app)

// // handle requests that don't match '/events'
// app.get('*', (req, res) =>{
//     res.sendFile(path.join(__dirname+'/build/index.html'))
// });

// const PORT = 3001

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
// })


// const server = http.createServer(async (req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     res.setHeader('Content-Type', 'application/json')
//     switch (req.url) {
//         case '/':
//             const query = await notion.databases.query({
//                 database_id: notionDatabaseID,
//             })
//             const list: AimEvent[] = query.results.map((row) => {
//                 // JSON processing due to bugs
//                 console.log('row', row)
//                 const rowProps = JSON.parse(JSON.stringify(row)).properties
//                 console.log('rowProps', rowProps)
//                 const nameCell = JSON.parse(JSON.stringify(rowProps.Name)).title[0]
//                 const dateCell = JSON.parse(JSON.stringify(rowProps.Date))
//                 const locationCell = rowProps.location
//                 const signupCell = rowProps.signup
//                 // Depending on column "type" in Notion, there will be different data available 
//                 // (URL vs date vs text). So for TypeScript to safely infer, we need to check
//                 // "type" value.
//                 const isName = nameCell.type === 'text'
//                 const isDate = dateCell.type === 'date'
//                 const isLocation = locationCell.type === 'rich_text'
//                 const isSignUp = signupCell.type === 'url'
                

//                 if (isName && isDate && isLocation && isSignUp) {
//                     // Pull the string values of the cells off the column data
//                     const name = nameCell.plain_text
//                     const date = dateCell.date
//                     const location = locationCell.rich_text?.[0].plain_text
//                     const signup = signupCell.url ?? '';
//                     // Return it in our `AimEvent` shape
//                     return { name, date, location, signup };
//                 }

//                 return { name: 'NOT_FOUND', date: {}, location: '', signup: '' }
//             })

//             res.setHeader("Content-Type", "application/json");
//             res.writeHead(200);
//             res.end(JSON.stringify(list));
//             break
//         default:
//             res.writeHead(404)
//             res.end(JSON.stringify({ error: 'Resource not found' }))
//     }
// })

// server.listen(PORT, HOST, () => {
//     console.log(`Server is running on http://${HOST}:${PORT}`)
// })