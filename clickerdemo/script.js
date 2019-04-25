var clicks = 0;
var upgrade = 1;

function up()
{
upgrade = upgrade + 1;
}

function slave()
{
    clicked()
    setTimeout(slave, 5000)
}

function clicked()
{
    clicks = clicks + upgrade;
    document.getElementById("clicks").innerHTML = clicks
}
