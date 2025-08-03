function showDate () {
    const date = new Date();
    date.setFullYear(2024);
    date.setFullMonth(10) + 1;
    date.setFullDate(20);
    
    const year = date.getFullYear();
    const month =date.getMonth() + 1;
    const day = date.getDate();

    console.log(year + '年' + month + '月' + day + '日');
}

showDate();
