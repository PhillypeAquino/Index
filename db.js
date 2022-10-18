const pgp = require('pg-promise')();
const db = pgp ({
      user: 'postgres',
      password:'postgres',
      host: 'localhost',
      port: '5432',
      database: 'redefama_07062022'
});

module.exports = db;






/* const {Client} = require ('pg');
const client = new Client({
      host: "localhost",
      user: "postgres",
      port: 5432,
      password: "postgres",
      database:"redefama_07062022"
})

module.exports = client


execute();
async function execute () {
      try{
            await client.connect();
            console.log("connect");

            const {rows} = await client.query(`SELECT nome_cliente, sum(total_venda) as Total FROM public.vwfw_venda_cf GROUP BY nome_cliente LIMIT 100`);
            const clientes = rows.map( elemento => {
                  return `${elemento.nome_cliente}`
            });
            //console.log(rows);
            console.table(clientes);
            await client.end();
            console.log("disconnect")

      } catch (ex) {
            console.log( `Something Wrong ${ex}`)
      }

      finally {
            await client.end()
            console.log('disconnect')
      }
}
 */



/* const resultrows = result.rows;
const array = resultrows.map( (elemento) => {
      return `${elemento.nome_cliente}`
}); */