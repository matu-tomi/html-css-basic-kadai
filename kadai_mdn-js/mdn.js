function showDate () {
    const date = new Date();
    date.setfullyear(2024);
    date.setfullmonth(10);
    date.setfulldate(20);
    
    const year = date.getFullYear();
    const month =date.getMonth() + 1;
    const day = date.getDate();

    console.log(year + '年' + month + '月' + day + '日');
}

showDate();
