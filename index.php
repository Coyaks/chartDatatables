<?php 

//index.php

?>

<!doctype html>
<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Bootstrap CSS -->
        <link href="library/bootstrap-5/bootstrap.min.css" rel="stylesheet" />
        <link href="library/dataTables.bootstrap5.min.css" rel="stylesheet" />
        <link href="library/daterangepicker.css" rel="stylesheet" />

        <script src="library/jquery.min.js"></script>
        <script src="library/bootstrap-5/bootstrap.bundle.min.js"></script>
        <script src="library/moment.min.js"></script>
        <script src="library/daterangepicker.min.js"></script>
        <!--Lib Chart-->
        <script src="library/Chart.bundle.min.js"></script>
        <script src="library/jquery.dataTables.min.js"></script>
        <script src="library/dataTables.bootstrap5.min.js"></script>

        <title>Date Range Filter in DataTable, Chart.js using Date Range Picker with PHP MySQL using Ajax</title>
    </head>
    <body>

        <div class="container-fluid">
            <h1 class="mt-2 mb-3 text-center text-primary">Date Range Filter in DataTable, Chart.js using Date Range Picker with PHP MySQL using Ajax</h1>
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col col-sm-9">Sales Data</div>
                        <div class="col col-sm-3">
                            <!-- INPUT -->
                            <input type="text" id="daterange_textbox" class="form-control" readonly />
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <!--chart-container pie-chart-->
                        <div class="chart-container pie-chart">
                            <canvas id="bar_chart" height="40"></canvas>
                        </div>
                        <table class="table table-striped table-bordered" id="tablaRangos">
                            <thead>
                                <tr>
                                    <th>Order Number</th>
                                    <th>Order Value</th>
                                    <th>Order Date</th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <script src="main.js"></script>
    </body>
</html>
