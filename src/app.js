import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';

const app = express();

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    let testUser = {
        name: 'Pepe',
        last_name: 'Martinez'
    };

    res.render('index', testUser);
})

const server = app.listen(8080, () => console.log('Server running in port 8080'))