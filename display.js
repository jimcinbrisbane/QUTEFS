let current = 'home';
let switching = false;

$(()=>{
    $('#topnav a').click(ev => {
        let newPage = $(ev.target).data('to');
        if(newPage && !switching && newPage !== current){
            switching = true;
            $(`#${current}`).animate({ opacity: 0, marginTop: '15px' }, 300, ()=>{
                $(`#${current}`).hide();

                current = newPage;
                $(`#${newPage}`).css({ opacity: 0, marginTop: '15px' }).show().animate({ opacity: 1, marginTop: '0px' }, 300, ()=>{ 
                    switching = false;
                });
            });
        }
    })
});