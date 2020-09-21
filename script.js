
let currentPhoto = 0;
let imagesData = [
    {
        photo: './images/image1.jpg',
        title: 'Lago di Braies',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        photo: './images/image2.jpg',
        title: 'Sunset in the Mountains',
        description: 'Diam sollicitudin tempor id eu nisl. Congue quisque egestas diam in.'
    },
    {
        photo: './images/image3.jpg',
        title: 'Sunrise',
        description: 'Nibh venenatis cras sed felis eget. Sit amet purus gravida quis.'    
    },
    {
        photo: './images/image4.jpg',
        title: 'Sunset on the Canal',
        description: 'Dignissim enim sit amet venenatis urna cursus eget nunc. Nibh ipsum consequat nisl vel.'
    },
    {
        photo: './images/image5.jpg',
        title: 'Bridge to Where the Wild Things Are',
        description: 'Nunc id cursus metus aliquam eleifend mi. Pellentesque habitant morbi tristique senectus.'
    },
    {
        photo: './images/image6.jpg',
        title: 'Poppy field',
        description: 'Porta non pulvinar neque laoreet suspendisse. Amet tellus cras adipiscing enim.'
    },
    {
        photo: './images/image7.jpg',
        title: 'Hay field',
        description: 'Placerat duis ultricies lacus sed turpis tincidunt id. Commodo viverra maecenas accumsan lacus vel facilisis volutpat.'
    },
    {
        photo: './images/image8.jpg',
        title: 'A Walk in the Snow',
        description: 'Fringilla phasellus faucibus scelerisque eleifend donec pretium. Non nisi est sit amet facilisis.'
    }
];

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-description').text(imagesData[photoNumber].description);
    $('.thumbImage').css('width','50px').css('height','50px');
    $(`[data-number="${photoNumber}"]`).css('width','60px').css('height','60px');
}

loadPhoto(currentPhoto);

$('#rightArrow').click(() => {
    if(currentPhoto < imagesData.length-1) {
        currentPhoto++;
        loadPhoto(currentPhoto);
    }else{
        currentPhoto = 0
        loadPhoto(currentPhoto);
    }
});

$('#leftArrow').click(() => {  
    if(currentPhoto == 0 ){
        currentPhoto = imagesData.length-1;
        loadPhoto(currentPhoto);
    }else{
        currentPhoto--;
        loadPhoto(currentPhoto);
    }
});

let thumbnailIndex = 0;

imagesData.forEach(element => {
    $('#thumbnail-container').append(
        `<div class="thumbnail">
            <p class="title">${element.title}</p>
            <img src="${element.photo}" class="thumbImage" data-number="${thumbnailIndex}">
        </div>`)
    thumbnailIndex++;
});

$('.thumbnail').click((event) => {
    let index = parseInt($(event.target).attr('data-number'));
    loadPhoto(index);
    currentPhoto = index;
});