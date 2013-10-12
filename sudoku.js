
// PROGRAM USES A BOX STRUCTURE FOR EACH BOX
var status=0;
var difficulty=4;
var a=new Array(9);
var q=new Array(9);
function init(){
for (var i=0 ; i<9 ;i++)
{
a[i]=new Array(9);
q[i]=new Array(9);
}
for (var i=0;i<9;i++)
	{
	for(var j=0;j<9;j++)
		{
		a[i][j]={ real : 0 , val : [1 , 1 , 1 , 1 , 1 , 1 ,1 ,1 , 1] , count : 0};
		q[i][j]=1;
			}
		}
}

function main()
{
init();
var sudoku=[[7,3,4,6,8,2,1,5,9],[2,5,9,7,4,1,8,6,3],[1,6,8,9,5,3,2,4,7],[5,9,2,4,3,6,7,1,8],[3,4,1,8,2,7,6,9,5],[8,7,6,5,1,9,3,2,4],[4,1,3,2,9,8,5,7,6],[6,8,5,1,7,4,9,3,2],[9,2,7,3,6,5,4,8,1]];
var sudoku1=[[8,1,0,0,0,0,7,0,3],[0,0,0,6,0,7,0,0,8],[9,0,2,3,1,0,6,0,0],[0,4,0,0,7,0,5,6,0],[0,0,7,9,0,1,2,0,0],[0,6,3,0,4,0,0,9,0],[0,0,4,0,9,2,1,0,6],[6,0,0,5,0,4,0,0,0],[7,0,8,0,0,0,0,5,9]];
var sudoku2=[[6,0,0,0,0,8,2,0,0],[2,0,0,7,9,0,0,0,0],[0,3,0,0,0,0,0,6,8],[0,6,0,0,0,7,8,0,0],[0,0,0,0,0,0,0,0,0],[0,0,1,4,0,0,0,3,0],[9,2,0,0,0,0,0,4,0],[0,0,0,0,8,1,0,0,6],[0,0,6,3,0,0,0,0,5]];
var sudoku3=[[0,0,5,3,0,0,0,0,0],[8,0,0,0,0,0,0,2,0],[0,7,0,0,1,0,5,0,0],[4,0,0,0,0,5,3,0,0],[0,1,0,0,7,0,0,0,6],[0,0,3,2,0,0,0,8,0],[0,6,0,5,0,0,0,0,9],[0,0,4,0,0,0,0,3,0],[0,0,0,0,0,9,7,0,0]];
generate(a,difficulty);
for (var i=0; i<9; i++) {
		for (var j=0; j<9; j++) {
			if (a[i][j].real==0)
			q[i][j]=0;
		}
	}

display(a);


}

function reset()
{
	status=0;
	main();
}


function solveit()
{
if(status==1)
{
//alert("This sudoku is alredy slved once. Try the next question..\nThanx");
exit();
}
for(var i=1;i<10;i++){
	for(var j=1;j<10;j++){
	var id=i+""+j;
	var str=document.getElementById(id).value;
	var str1=parseInt(str);
	if(isNaN(str1)||str1<0||str1>9||str.length==0)
	a[i-1][j-1].real=0;
	else
	a[i-1][j-1].real=str1;
	
	}}
		display(a);
if(!checkvalid(a))
alert("sahi answer dal....sudoku solve karna ni ata kya ?" );
//toastr.error('My name is Inigo Montoya. You Killed my father, prepare to die!');
else if(solve(a,0)){
display(a);
status=1;
}
else{
//alert("THE SUDOKU IS UNSOLVABLE");
	remove_messege();
	display(a);
	document.getElementById("message").innerHTML += "<div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-hidden='true' onclick='remove_messege()'>&times;</button><strong>The sudoku is unsolvable!</strong></div>";
}
}


function checkit()
{
	for(var i=1;i<10;i++){
	for(var j=1;j<10;j++){
	var id=i+""+j;
	var str=document.getElementById(id).value;
	var str1=parseInt(str);
	if(isNaN(str1)||str1<0||str1>9||str.length==0)
	a[i-1][j-1].real=0;
	else
	a[i-1][j-1].real=str1;
	}}
		display(a);
		if(!checkvalid(a)){
			//alert(" sahi answer dal....sudoku solve karna ni ata kya ?" );
			document.getElementById("message").innerHTML = "";
			document.getElementById("message").innerHTML += "<div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-hidden='true' onclick='remove_messege()'>&times;</button><strong>The solution is wrong.</strong></div>";
		}
		else if(issolved(a)==1){
			//alert("machaya...party!!!");
			document.getElementById("message").innerHTML = "";
			document.getElementById("message").innerHTML += "<div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true' onclick='remove_messege()'>&times;</button><strong>Well Done!</strong></div>";
		}
		else{
			//alert("sudoku solve karna ni ata kya???");
			document.getElementById("message").innerHTML = "";
			document.getElementById("message").innerHTML += "<div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-hidden='true' onclick='remove_messege()'>&times;</button><strong>The solution is wrong.</strong></div>";
		}

}
function emptyboard()
{
	for(var i=1;i<10;i++){
	for(var j=1;j<10;j++){
		a[i-1][j-1].real=0;
		q[i-1][j-1]=0;
	}
	}
	display(a);

}

function remove_messege(){
	document.getElementById("message").innerHTML = "";
	document.getElementById("levelmessage").innerHTML = "";
}

function callchangediff(){
	remove_messege();
	document.getElementById("levelsetter").innerHTML = "<br><input id = 'level' type='text' class='form-control' onblur='changedifficulty()' placeholder = 'level'><br><br>";
	document.getElementById("levelmessage").innerHTML += "<div class='alert alert-info'><button type='button' class='close' data-dismiss='alert' aria-hidden='true' onclick='remove_messege()'>&times;</button><strong>Enter a number from 1 to 5 and click outside</strong></div>";
}

function changedifficulty()
{
	var l = document.getElementById("level").value;
	/*
	var diff=prompt("Please enter Difficulty level (1-5)",difficulty);*/
	var d1=parseInt(l);
	if(d1<=5&&d1>0){
	difficulty=d1;
	document.getElementById("levelsetter").innerHTML = "<br>";
	remove_messege();
	main();

	}
	else{
		remove_messege();
		document.getElementById("levelmessage").innerHTML += "<div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-hidden='true' onclick='remove_messege()'>&times;</button><strong>Wrong input</strong></div>";
	}
}

function display(a)
{
var inputs="";
for (var i=1;i<10;i++)
	{
	for(var j=1;j<10;j++)
	   {
	   var id=i+""+j;
	   if(q[i-1][j-1]==1) 
	   inputs=inputs+"<button id='"+id+"' class='btn btn-warning btn1 ' value = '"+a[i-1][j-1].real+"'>"+a[i-1][j-1].real+"</button>";
	   else if(a[i-1][j-1].real!=0)
	   inputs=inputs+"<input type='text' id='"+id+"' class='form-control' value='"+a[i-1][j-1].real+"'>";
	   else
	   inputs=inputs+"<input type='text' id='"+id+"' class='form-control' value=''>";
	   }
	}
document.getElementById('board').innerHTML=inputs;
var x=0;
var y= 0;;
for (var a=0 ;a<9 ; a++)
	{
	x+=40;
	if(a % 3 ==0)
	x+=10;
	y=0;
	for(var b=0 ; b<9 ; b++)
	   {
	   y+=40;
	   if(b % 3 ==0)
	   y+=10;
	   var a1=(a+1).toString();
	   var b1=(b+1).toString();
	   document.getElementById(a1+b1).style.position="absolute";
	   document.getElementById(a1+b1).style.top=y+"px";
	   document.getElementById(a1+b1).style.left=x+"px";
	   document.getElementById(a1+b1).style.height=40+"px";
	   document.getElementById(a1+b1).style.width=40+"px";
	   
	   }
	}
}	

function passinto(a,i ,j)
{
	a[i][j].count=9;
	var l;
	var m;
	m=j;
	for (l=0; l<9; l++) {
		var check;

		if (l!=i) {
			check=a[l][m].val[a[i][j].real-1];

			if (a[l][m].real==0&&check==1) {
				a[l][m].val[a[i][j].real-1]=0;
				a[l][m].count++;
			}
		}
	}
	l=i;
	for (m=0; m<9; m++) {
		var check;

		if (m!=j) {
			check=a[l][m].val[a[i][j].real-1];

			if (a[l][m].real==0&&check==1) {
				a[l][m].val[a[i][j].real-1]=0;
				a[l][m].count++;
			}
		}
	}

	m=(j- ( j% 3));
	for(var iter=0;iter <3 ;iter++) {
		l=(i- (i % 3));
		for(var iter1=0;iter1<3;iter1++) {
			if (l!=i||m!=i) {
				var check;
				check=a[l][m].val[a[i][j].real-1];

				if (a[l][m].real==0&&check==1) {
					a[l][m].val[a[i][j].real-1]=0;
					a[l][m].count++;
				}
			}

			l++;
		}
		m++;
	}
}

function logic2(a)
{
	var solved=0;
	var count=0,pos=[0,0];

	for (var n=0; n<9; n++) {
		for (var i=0; i<9; i++) {
			count=0;
			pos[0]=0;
			pos[1]=0;

			for (var j=0; j<9; j++) {
				if (a[i][j].val[n]&&a[i][j].count<9) {
					count++;
					pos[0]=i;
					pos[1]=j;
				}
			}

			if (count==1) {
				a[pos[0]][pos[1]].real=n+1;
				a[pos[0]][pos[1]].count=9;
				passinto(a,pos[0],pos[1]);
				solved=1;
			}

			count=0;
			pos[0]=0;
			pos[1]=0;

			for (var j=0; j<9; j++) {
				if (a[j][i].val[n]&&a[j][i].count<9) {
					count++;
					pos[0]=j;
					pos[1]=i;
				}
			}

			if (count==1) {
				a[pos[0]][pos[1]].real=n+1;
				a[pos[0]][pos[1]].count=9;
				passinto(a,pos[0],pos[1]);
				solved=1;
			}

			count=0;
			pos[0]=0;
			pos[1]=0;
			var l=(i- (i % 3))
			var m=(i%3)*3;
			for(var iter=0;iter <3 ;iter++) {
				m=(i%3)*3;
				for(var iter1=0;iter1 <3 ;iter1++){
					if (a[l][m].val[n]&&a[l][m].count<9) {
						count++;
						pos[0]=l;
						pos[1]=m;
					}

					m++;
				}
				l++;
			}

			if (count==1) {
				a[pos[0]][pos[1]].real=n+1;
				a[pos[0]][pos[1]].count=9;
				passinto(a,pos[0],pos[1]);
				solved=1;
			}
		}
	}

	return solved;
}
// APPLYING THIRD LOGIC
function logic3(a)
{
	var solved=0;
	var count;
	var pos=new Array(9);
	for(var kk=0;kk<9;kk++)
	pos[kk]=new Array(2);

	for (var i=0; i<9; i++) {
		count=0;

		for (var j=0; j<9; j++) {
			if (a[i][j].real==0&&a[i][j].count<9) {
				pos[count][0]=i;
				pos[count][1]=j;
				count++;
			}
		}

		for (var set=2; set<3; set++)
			solved=check_cut(a,set,pos,count) + solved;

		count=0;

		for (var j=0; j<9; j++) {
			if (a[j][i].real==0&&a[j][i].count<9) {
				pos[count][0]=j;
				pos[count][1]=i;
				count++;
			}
		}

		for (var set=2; set<3; set++)
			solved=check_cut(a,set,pos,count)+solved;

		count=0;
		var l=(i- (i % 3))
		var m=(i%3)*3;
		for(var iter=0;iter <3 ;iter++) {
			m=(i%3)*3;
			for(var iter1=0;iter1 <3 ;iter1++) {
				if (a[l][m].real==0&&a[l][m].count<9) {
					pos[count][0]=l;
					pos[count][1]=m;
					count++;
				}

				m++;
			}
			l++;
		}

		for (var set=2; set<3; set++)
			solved=check_cut(a,set,pos,count)+solved;
	}

	return solved;
}

function check_cut(a,set,pos,count)
{
	for (var i=0; i<count; i++) {
		for (var j=i+1; j<count; j++) {
			var uni=new Array(9);
			var unicount=0;
			var x1=pos[i][0];
			var y1=pos[i][1];
			var x2=pos[j][0];
			var y2=pos[j][1];

			for (var n=0; n<9; n++) {
				if (a[x1][y1].val[n]) {
					uni[unicount]=n;
					unicount++;
				}
			}

			for (var n=0; n<9; n++) {
				if (a[x2][y2].val[n]) {
					var check=1;

					for (var m=0; m<unicount; m++) {
						if (uni[m]==n)
							check=0;
					}

					if (check) {
						uni[unicount]=n;
						unicount++;
					}
				}
			}

			if (unicount==set) {
				for (var n=0; n<count; n++) {
					var x=pos[n][0],y=pos[n][1];

					if (n!=i&&n!=j) {
						for (var m=0; m<unicount; m++) {
							if (a[x][y].val[uni[m]]) {
								a[x][y].val[uni[m]]=0;
								a[x][y].count++;
							}
						}
					} else {
						for (var m=0; m<9; m++) {
							var check=false;

							for (var k=0; k<unicount; k++) {
								check=check||(uni[k]==m);
							}

							if (!check) {
								if (a[x][y].val[m]) {
									a[x][y].val[m]=0;
									a[x][y].count++;
								}
							}
						}
					}
				}

				return 1;
			}
		}
	}

	return 0;
}

function logic4(a)
{
	for (var i=0; i<9; i++) {
		for (var j=0; j<9; j++) {
			if (a[i][j].count==7&&a[i][j].real==0) {
				var b=new Array(9);
				for (var ii1=0 ; ii1<9 ;ii1++)
				{
				b[ii1]=new Array(9);
				}
				for (var i11=0;i11<9;i11++)
				{
				for(var j11=0;j11<9;j11++)
					{
					b[i11][j11]={ real : a[i11][j11].real , val : [a[i11][j11].val[0],a[i11][j11].val[1],a[i11][j11].val[2],a[i11][j11].val[3],a[i11][j11].val[4],a[i11][j11].val[5],a[i11][j11].val[6],a[i11][j11].val[7],a[i11][j11].val[8]]  , count : a[i11][j11].count};
						}
					}

				var check=1;

				for (var l=0; l<9; l++) {
					if (a[i][j].val[l]) {
						b[i][j].real=l+1;

						if (solve(b,1)) {
							for (var i11=0;i11<9;i11++)
							{
							for(var j11=0;j11<9;j11++)
								{
								a[i11][j11]={ real : b[i11][j11].real , val : [b[i11][j11].val[0],b[i11][j11].val[1],b[i11][j11].val[2],b[i11][j11].val[3],b[i11][j11].val[4],b[i11][j11].val[5],b[i11][j11].val[6],b[i11][j11].val[7],b[i11][j11].val[8]]  , count : b[i11][j11].count};
									}
								}

							return 1;
						}
					}
				}
			}
		}
	}

	return 0;
}

function checkvalid(a)    // checks validity of a sudoku
{
	var check=true;

	for (var i=0; i<9; i++) {
		for (var j=0; j<9; j++) {
			var l,m;

			if (a[i][j].real!=0) {
				for (l=0,m=j; l<9; l++)
					if (l!=i)
						check=check&&(a[i][j].real!=a[l][m].real);

				for (l=i,m=0; m<9; m++)
					if (m!=j)
						check=check&&(a[i][j].real!=a[l][m].real);

				m=(j- (j % 3))
				for(var iter=0;iter <3 ;iter++) {
					l=(i- (i % 3))
					for(var iter1=0;iter1 <3 ;iter1++) {
						if (l!=i&&m!=j)
							check=check&&(a[i][j].real!=a[l][m].real);
					}
				}
			}
		}
	}

	return check;
}
function issolved(a)
{
	var check=true;

	for (var i=0; i<9; i++)
		for (var j=0; j<9; j++)
			check=check&&(a[i][j].real!=0);

	return check;
}
function solve(a,mode)
{
	var i;
	var j;
	for (i=0; i<9; i++) {
		for (j=0; j<9; j++) {
			if (a[i][j].real!=0) {
				passinto(a,i,j);
			}
		}
	}

	for(var kk=0;kk<81;kk++) {
		var solved=0;

		for (i=0; i<9; i++) {
			for (j=0; j<9; j++) {
				if (a[i][j].count==8) {
					var k=0;
					for (k=0; k<9; k++)
						if (a[i][j].val[k]==1)
							break;

					k++;
					a[i][j].real=k;
					a[i][j].count=9;
					passinto(a,i,j);
					solved=1;
				}
			}
		}

		if (solved==0) {
			if (issolved(a)) {
				return 1;
				}
			else {
				solved=logic2(a);

				if (solved==0&&checkvalid(a)==1) {
					solved=logic3(a);
				}
                 
				if (!issolved(a)&&mode==0) {
					logic4(a);
				}
			}
		}
	}
	if(issolved(a))
	return 1;
	else return 0;
}
//function to generate random number

function randuv(u,v)
{
var a=Math.random();
a=a*(v+1-u);
a=a+u;
return parseInt(a);
}

// *********** END OF THE SOLVING PART ********************//

// ********************* GEANERATING SUDOKU FUNCTION ************************************** //
// This function Is used Generate The sudoku

function generate(a,difficulty)
{ 
	randomize(a);
	var remove=0;
	var maxremove;
	var check=1;
	var r=[[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1]];	
	switch (difficulty) {
	case 1:
		maxremove=28;
		break;
	case 2:
		maxremove=36;
		break;
	case 3:
		maxremove=43;
		break;
	case 4:
		maxremove=51;
	default:
		maxremove=81;
		break;
	}

	var time1;
	var d1=new Date();
	time1=d1.getTime();

	while (check>=1&&remove<maxremove) {
		var b=new Array(9);
		for(var iter1=0;iter1<9;iter1++)
		b[iter1]=new Array(9);
		
		for (var i11=0;i11<9;i11++)
				{
				for(var j11=0;j11<9;j11++)
					{
					b[i11][j11]={ real : a[i11][j11].real , val : [a[i11][j11].val[0],a[i11][j11].val[1],a[i11][j11].val[2],a[i11][j11].val[3],a[i11][j11].val[4],a[i11][j11].val[5],a[i11][j11].val[6],a[i11][j11].val[7],a[i11][j11].val[8]]  , count : a[i11][j11].count};
						}
					}
	/*	for (var i=0; i<9; i++)
			for (var j=0; j<9; j++)
				b[i][j]=a[i][j];*/

		var i=randuv(0,8);
		var j=randuv(0,8);
		if (r[i][j]==1) {
			b[i][j].real=0;
			b[i][j].count=0;
			b[i][j].val=[1,1,1,1,1,1,1,1,1];
			r[i][j]=0;
			if (solve(b,1)) {
				a[i][j].real=0;
				a[i][j].count=0;
				a[i][j].val=[1,1,1,1,1,1,1,1,1];
				remove++;
			} 
			else {
				var valid=0;

				for (var x=0; x<9; x++)
					for (var y=0; y<9; y++)
						valid=valid+r[x][y];

				check=valid;
			}
		}
		var d2=new Date();
		var time2=d2.getTime();

		if (time2>time1+1000)
			check=0;
	}
}


//*************** METHOD TO GENERATE A RANDOM ANSWER **********************//

//These are the the different operations used on a fixed answer
//function for image along middle row
function hor_image(sudoku)
{
	for (var i=0; i<=3; i++) {
		for (var j=0; j<9; j++) {
			var temp=sudoku[i][j];
			sudoku[i][j]=sudoku[8-i][j];
			sudoku[8-i][j]=temp;
		}
	}
}

//function for image along middle column
function ver_image(sudoku)
{
	for (var i=0; i<9; i++) {
		for (var j=0; j<=3; j++) {
			var temp=sudoku[i][j];
			sudoku[i][j]=sudoku[i][8-j];
			sudoku[i][8-j]=temp;
		}
	}
}

//function for anti-clockwise rotation by 90
function left(sudoku)
{
	for (var i=0; i<4; i++) {
		for (var j=i; j<8-i; j++) {
			var temp=sudoku[8-j][i];
			sudoku[8-j][i]=sudoku[i][j];
			sudoku[i][j]=sudoku[j][8-i];
			sudoku[j][8-i]=sudoku[8-i][8-j];
			sudoku[8-i][8-j]=temp;
		}
	}
}

//to rotate the matrix by 180 degrees
function rotate_180(sudoku)
{
	left(sudoku);
	left(sudoku);
}

//to swap along principal diagonal
function swap_diag1(sudoku)
{
	for (var i=1; i<9; i++) {
		for (var j=0; j<i; j++) {
			var temp=sudoku[i][j];
			sudoku[i][j]=sudoku[j][i];
			sudoku[j][i]=temp;
		}
	}
}

//to swap along the other diagonal
function swap_diag2(sudoku)
{
	for (var i=0; i<8; i++) {
		for (var j=0; j<8-i; j++) {
			var temp=sudoku[i][j];
			sudoku[i][j]=sudoku[8-j][8-i];
			sudoku[8-j][8-i]=temp;
		}
	}
}

//to swap horizontal strips i,j<(0,1,2)
function hor_swap(sudoku,i,j)
{
	for (var m=0; m<3; m++) {
		for (var n=0; n<9; n++) {
			var temp=sudoku[3*i+m][n];
			sudoku[3*i+m][n]=sudoku[3*j+m][n];
			sudoku[3*j+m][n]=temp;
		}
	}
}

//to swap vertical strips i,j<(0,1,2)
function ver_swap(sudoku,i,j)
{
	for (var m=0; m<3; m++) {
		for (var n=0; n<9; n++) {
			var temp=sudoku[n][3*i+m];
			sudoku[n][3*i+m]=sudoku[n][3*j+m];
			sudoku[n][3*j+m]=temp;
		}
	}
}

// This function creates so many answers fron one fixed answer by using different symmetry operations
function randomize(a)
{
	var sudoku=[[7,3,4,6,8,2,1,5,9],[2,5,9,7,4,1,8,6,3],[1,6,8,9,5,3,2,4,7],[5,9,2,4,3,6,7,1,8],[3,4,1,8,2,7,6,9,5],[8,7,6,5,1,9,3,2,4],[4,1,3,2,9,8,5,7,6],[6,8,5,1,7,4,9,3,2],[9,2,7,3,6,5,4,8,1]];

	for (var i=0; i<50; i++) {
		var rd=randuv(1,9);
		var	rd1=randuv(0,2);
		var rd2=randuv(0,2);

		switch (rd) {
		case 1:
			hor_image(sudoku);
			break;
		case 2:
			ver_image(sudoku);
			break;
		case 3:
			left(sudoku);
			break;
		case 4:
			rotate_180(sudoku);
			break;
		case 5:
			swap_diag1(sudoku);
			break;
		case 6:
			swap_diag2(sudoku);
			break;
		case 7:
			hor_swap(sudoku,rd2,rd1);
			break;
		case 8:
			ver_swap(sudoku, rd2, rd1);
			break;
		}
	}

	for (var i=0; i<9; i++) {
		for (var j=0; j<9; j++) {
			a[i][j].real=sudoku[i][j];
		}
	}
}