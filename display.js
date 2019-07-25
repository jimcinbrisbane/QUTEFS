let current = 'home';
let switching = false;

$(()=>{
    $('#topnav a').click(ev => {
        let newPage = $(ev.target).data('to');
        if(newPage){
            if(!switching){
                switching = true;
                $(`#${current}`).fadeOut('fast', ()=>{
                    current = newPage;
                    $(`#${newPage}`).fadeIn('fast', ()=>{ switching = false });
                });
            }
        }
    })
});