$(function() {
    console.log('Ready!');
    addEvents();
});

function addEvents() {
    let $buttonElem = $("#submit-btn");
    $buttonElem.on('click', function(event) {
        
        let $fnameElem = $('#fname');
            console.log($fnameElem.val());

        let $lnameElem = $('#lname');
            console.log($lnameElem.val());

        let $genderMale = $('#genderM');
            console.log($("[name='gender']:checked").val());

        let $genderFemale = $('#genderF');

        let $textBox = $('#message');
            console.log($textBox.val());

        if ($fnameElem.val() === '') {
            $fnameElem.addClass('invalidInput');
        } 
        else {
            $fnameElem.removeClass('invalidInput');
        }

        if ($lnameElem.val() === '') {
            $lnameElem.addClass('invalidInput');
        } 
        else {
            $lnameElem.removeClass('invalidInput');
        }

        if ($textBox.val() === '') {
            $textBox.addClass('invalidInput');
        } 
        else {
            $textBox.removeClass('invalidInput');
        }

            if( $fnameElem.val() !== '' && $lnameElem.val() !== '' && $textBox.val() !== '') {
                $('#succes').text(`Thank you for contacting us,  ${$fnameElem.val()} !`).css('border', '1px solid green');
            }

    });
}





   


