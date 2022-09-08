fetch_data();

var sale_chart;

function fetch_data()
{
    var dataTable = $('#order_table').DataTable({
        "processing" : true,
        "serverSide" : true,
        "order" : [],
        "ajax" : {
            url:"action.php",
            type:"POST",
            data:{action:'fetch'}
        },
        "drawCallback" : function(settings)
        {
            var sales_date = [];
            var sale = [];

            for(var count = 0; count < settings.aoData.length; count++)
            {
                sales_date.push(settings.aoData[count]._aData[2]);
                sale.push(parseFloat(settings.aoData[count]._aData[1]));
            }

            var chart_data = {
                labels:sales_date,
                datasets:[
                    {
                        label : 'Sales',
                        backgroundColor : 'rgba(153, 102, 255)',
                        color : '#fff',
                        data:sale
                    }
                ]
            };

            var group_chart3 = $('#bar_chart');

            if(sale_chart)
            {
                sale_chart.destroy();
            }

            sale_chart = new Chart(group_chart3, {
                type:'bar',
                data:chart_data
            });
        }
    });
}
