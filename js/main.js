$(document).ready(function(){
    $('.feature').css('opacity', 0);
    $('#coffee-story-header').css('opacity', 0);
    $('#story-description').css('opacity', 0);
    $('.title-perfection').css('opacity', 0);

    // Carousel Animation from 
    //  https://www.sitepoint.com/bootstrap-carousel-with-css3-animations/
    var $myCarousel = $('#myCarousel');

    // Initialize carousel
    $myCarousel.carousel();

    // Animation Carousel
    function doAnimations(elems){
        var animEndEv = 'webkitAnimationEnd animationend';

        elems.each(function(){

            // we then loop through each element and extract animation info from data-animation
            var $this = $(this);
            var $animationType = $this.data('animation');

            // add each animation class to the element, then attach event listener at end to know when to remove the class
            $this.addClass($animationType).one(animEndEv, function(){
                $this.removeClass($animationType);
            });
        });

    }

    // select elements to be animated in the first slide on page load
    var $firstAnimatingElems = $myCarousel.find('.item:first').find('[data-animation ^= "animated"]');

    // Apply the animation using our function
    doAnimations($firstAnimatingElems);

    // Pause the carousel 
    $myCarousel.carousel({
        interval: 500
    });

    // Attach our doAnimations() function to the carousel's slide.bs.carousel event 
    $myCarousel.on('slide.bs.carousel', function (e) { 
        // Select the elements to be animated inside the active slide 
        var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
        doAnimations($animatingElems);
    });


    //Waypoints to animate elements
    $(".title-perfection").waypoint(function() {
        $(".title-perfection").addClass('fadeInUp');
    }, { offset: '90%'});

    $(".feature").waypoint(function() {
        $(".feature").addClass('fadeInUp');
    }, { offset: '60%'});

    $("#coffee-story-header").waypoint(function() {
        $("#coffee-story-header").addClass('fadeInUp');
    }, { offset: '90%'});

    $("#story-description").waypoint(function() {
        $("#story-description").addClass('fadeInRight');
    }, { offset: '70%'});

});

