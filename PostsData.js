const database = require('./db');


exports.getPosts =  function () {
      return    database.query('SELECT nome as empresa, sum(total_venda) as Total FROM public.vwfw_venda_cf GROUP BY nome')
 
}