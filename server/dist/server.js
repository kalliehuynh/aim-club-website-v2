"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const http_1 = __importDefault(require("http"));
const client_1 = require("@notionhq/client");
const notionSecret = process.env.NOTION_SECRET;
const notionDatabaseID = process.env.NOTION_DATABASE_ID;
if (!notionDatabaseID || !notionSecret) {
    throw Error('Must define NOTION_SECRET and NOTION_DATABASE_ID in env');
}
const notion = new client_1.Client({
    auth: notionSecret,
});
const HOST = 'localhost';
const PORT = 8000;
const server = http_1.default.createServer((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    switch (req.url) {
        case '/':
            const query = yield notion.databases.query({
                database_id: notionDatabaseID,
            });
            const list = query.results.map((row) => {
                var _a, _b;
                // JSON processing due to bugs
                const nameCell = JSON.parse(JSON.stringify(row.properties.Name)).title[0];
                const dateCell = JSON.parse(JSON.stringify(row.properties.Date));
                const locationCell = row.properties.location;
                const descCell = row.properties.description;
                // Depending on column "type" in Notion, there will be different data available 
                // (URL vs date vs text). So for TypeScript to safely infer, we need to check
                // "type" value.
                // const isName = nameCell.type === 'text'
                const isName = nameCell.type === 'text';
                const isDate = dateCell.type === 'date';
                const isLocation = locationCell.type === 'rich_text';
                const isDesc = descCell.type === 'rich_text';
                if (isName && isDate && isLocation && isDesc) {
                    // Pull the string values of the cells off the column data
                    const name = nameCell.plain_text;
                    const date = dateCell.date;
                    const location = (_a = locationCell.rich_text) === null || _a === void 0 ? void 0 : _a[0].plain_text;
                    const desc = (_b = descCell.rich_text) === null || _b === void 0 ? void 0 : _b[0].plain_text;
                    // Return it in our `ThingToLearn` shape
                    return { name, date, location, desc };
                }
                return { name: '', date: 'NOT_FOUND', location: '', desc: '' };
            });
            res.setHeader("Content-Type", "application/json");
            res.writeHead(200);
            res.end(JSON.stringify(list));
            break;
        default:
            res.writeHead(404);
            res.end(JSON.stringify({ error: 'Resource not found' }));
    }
}));
server.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
