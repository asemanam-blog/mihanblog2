
	function showdate() {
	week= new Array("يكشنبه","دوشنبه","سه شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه")
	months = new Array("فروردين","ارديبهشت","خرداد","تير","مرداد","شهريور","مهر","آبان","آذر","دي","بهمن","اسفند");
	a = new Date();
	d= a.getDay();
	day= a.getDate();
	month = a.getMonth()+1;
	year= a.getYear();
	if (year== 0){year=2000;}
	if (year<900){year +=1900;}
	y=1;
	for(i=0;i<3000;i+=4) {
	if (year==i) {y=2;}
	}
	for(i=1;i<3000;i+=4) {
	if (year==i) {y=3;}
	}
	if (y==1) {
	year -= ( (month < 3) || ((month == 3) && (day < 21)) )? 622:621;

	switch (month) {
	case 1: (day<21)? (month=10, day+=10):(month=11, day-=20); break;
	case 2: (day<20)? (month=11, day+=11):(month=12, day-=19); break;
	case 3: (day<21)? (month=12, day+=9):(month=1, day-=20); break;
	case 4: (day<21)? (month=1, day+=11):(month=2, day-=20); break;
	case 5:
	case 6: (day<22)? (month-=3, day+=10):(month-=2, day-=21); break;
	case 7:
	case 8:
	case 9: (day<23)? (month-=3, day+=9):(month-=2, day-=22); break;
	case 10:(day<23)? (month=7, day+=8):(month=8, day-=22); break;
	case 11:
	case 12:(day<22)? (month-=3, day+=9):(month-=2, day-=21); break;
	default: break;
	}
	}
	if (y==2) {
	year -= ( (month < 3) || ((month == 3) && (day < 20)) )? 622:621;

	switch (month) {
	case 1: (day<21)? (month=10, day+=10):(month=11, day-=20); break;
	case 2: (day<20)? (month=11, day+=11):(month=12, day-=19); break;
	case 3: (day<20)? (month=12, day+=10):(month=1, day-=19); break;
	case 4: (day<20)? (month=1, day+=12):(month=2, day-=19); break;
	case 5: (day<21)? (month=2, day+=11):(month=3, day-=20); break;
	case 6: (day<21)? (month=3, day+=11):(month=4, day-=20); break;
	case 7: (day<22)? (month=4, day+=10):(month=5, day-=21); break;
	case 8: (day<22)? (month=5, day+=10):(month=6, day-=21); break;
	case 9: (day<22)? (month=6, day+=10):(month=7, day-=21); break;
	case 10:(day<22)? (month=7, day+=9):(month=8, day-=21); break;
	case 11:(day<21)? (month=8, day+=10):(month=9, day-=20); break;
	case 12:(day<21)? (month=9, day+=10):(month=10, day-=20); break;
	default: break;
	}
	}
	if (y==3) {
	year -= ( (month < 3) || ((month == 3) && (day < 21)) )? 622:621;
	switch (month) {
	case 1: (day<20)? (month=10, day+=11):(month=11, day-=19); break;
	case 2: (day<19)? (month=11, day+=12):(month=12, day-=18); break;
	case 3: (day<21)? (month=12, day+=10):(month=1, day-=20); break;
	case 4: (day<21)? (month=1, day+=11):(month=2, day-=20); break;
	case 5:
	case 6: (day<22)? (month-=3, day+=10):(month-=2, day-=21); break;
	case 7:
	case 8:
	case 9: (day<23)? (month-=3, day+=9):(month-=2, day-=22); break;
	case 10:(day<23)? (month=7, day+=8):(month=8, day-=22); break;
	case 11:
	case 12:(day<22)? (month-=3, day+=9):(month-=2, day-=21); break;
	default: break;
	}
	}
	document.write(week[d]+" "+day+" "+months[month-1]+" "+ year);
	}


