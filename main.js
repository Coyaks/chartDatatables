$(document).ready(function(){

    fetch_data();
    let myChart;
    function fetch_data(start_date = '', end_date = '')
    {

    }

    let dataTable = $('#tablaRangos').DataTable({
        "processing" : true,
        "serverSide" : true,
        "order" : [],
        "ajax" : {
            url:"action.php",
            type:"POST",
            ///todo -> datos que envias al server
            data:{
                action: 'fetch',
               /* start_date: start_date,
                end_date: end_date*/
            }
        },

        "drawCallback" : function(settings){
            console.log('settings ',settings.aoData)
            let axisX = [];
            let axisY = [];

            for(let count = 0; count < settings.aoData.length; count++)
            {
                axisX.push(settings.aoData[count]._aData[2]); //date axis X
                //console.log('settings.aoData ',settings.aoData[count]._aData[2])
                axisY.push(parseFloat(settings.aoData[count]._aData[1])); //sales axis Y
            }

            let chartData = {
                labels: axisX,
                datasets:[
                    {
                        label : 'Sales',
                        backgroundColor : 'rgba(153, 102, 255)',
                        color : '#fff',
                        data: axisY
                    }
                ]
            };

            let group_chart3 = $('#bar_chart');

            if(myChart)
            {
                console.log('myChart.destroy()')
                myChart.destroy();
            }

            myChart = new Chart(group_chart3, {
                type:'bar',
                data:chartData
            });
        }
    });

    $('#daterange_textbox').daterangepicker({
        ranges:{
            'Hoy' : [moment(), moment()],
            'Ayer' : [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Ultimos 7 dias' : [moment().subtract(6, 'days'), moment()],
            'Ultimos 30 dias' : [moment().subtract(29, 'days'), moment()],
            'Ultimos 6 meses' : [moment().subtract('months', 5), moment()],
            'Esta semana'     : [moment().startOf('week'), moment().endOf('week')],
            'La semana pasada': [moment().subtract('week', 1).startOf('week'), moment().subtract('week', 1).endOf('week')],
            'Este mes' : [moment().startOf('month'), moment().endOf('month')],
            'El mes pasado' : [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
            'Este año'        : [moment().startOf('year'), moment()],
            'El año pasado'   : [moment().subtract('year', 1).startOf('year'), moment().subtract('year', 1).endOf('year')],
            'Todo el tiempo'  : [moment().subtract('year', 20), moment()],
        },
        format : 'YYYY-MM-DD'
    }, function(start, end){

        $('#tablaRangos').DataTable().destroy();

        fetch_data(start.format('YYYY-MM-DD'), end.format('YYYY-MM-DD'));

    });

});