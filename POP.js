var s,l,m=Math;

async function con(a){console.log(a)}

async function bdy()
{
	console.log("If you are not an adult or not allowed to access porn according to law of your location then quit right now");
	alert("This website was made to redirect to other PORNOGRAPHIC WEBSITES...");
	s = (await req("lolwebpop.github.io/LolWebPop/data.txt")).split('\n');
	l=s.length;
	vw();
	req("lolwebpop.000webhostapp.com/iVisited.php");
}

function rand(t=Date.now()) { return parseInt(m.abs(m.sin(t)+m.cos(t))*10000000) }

function req(u)
{
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://"+u);
	return new Promise(
	(r)=>
	{
		xhr.onload = () =>
		{
			r(xhr.response);
		};
		xhr.send();
	});
}

async function opn()
{
	var URL = s[rand()%l]
	URL = "https://www."+URL+(URL.indexOf('.')+1?"":".com")
	con(URL)
	var pg=window.open('',"_blank");
	pg.document.write("<H1>Loading...");
	pg.location.href=URL;
}

async function vw()
{
	var v=(await req("lolwebpop.000webhostapp.com/dat.dat")).split('-'), d=new Date(), t=await req("lolwebpop.000webhostapp.com/Ddat.dat");
	document.getElementById("cnt").innerHTML="<U><center><H5>Numbers Of Visitors TODAY("+['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][d.getDay()]+") Till Now : "+t+"<BR/>Numbers Of Visitors This MONTH("+["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][d.getMonth()]+") Till Now : "+(v[0]+t)+"<BR/>Numbers Of Visitors This YEAR("+d.getYear()+") Till Now : "+(v[1]+t)+"<BR/>Numbers Of Visitors Till Now : "+(v[2]+t)+"</H5></U></center>";
}

