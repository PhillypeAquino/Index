const botao = document.querySelector('#btn');

botao.addEventListener('click', Realizer());

      function Realizer() {
                  async function getData() {
                        const response = await fetch('http://localhost:1200/posts');
                        const res = await response.json();
                        console.log(res);
                        return res;
                  };

                  getData().then(dat => {
                        const nome_empresa = dat.map( 
                                                function(index) {
                                                return index.empresa;
                                                            });
                        const  faturamento = dat.map( 
                                           function(index) {
                                              return index.total;
                                                      });
                  console.log(nome_empresa)
                  console.log(faturamento)
            
 
                  const dataa = {
                  labels: nome_empresa,
                  datasets: [{
                        label: 'Faturamento',
                        data: faturamento,
                        backgroundColor:  'rgba(255, 99, 132, 0.2)',
                        borderColor:  'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                  }]};
                  
                  const config = {
                  type: 'bar',
                  data: dataa,
                  options: {
                        scales: {
                    }}
                  };
                  const chart = new Chart(
                  document.getElementById('cchart').getContext('2d'),
                  config 
                  )
   });
};

