$(document).ready(function () {
    function clicklink() {
        $('#Telecharger i').addClass('fa-download');
        $('#Telecharger i').removeClass('fa-circle-o-notch fa-spin');
        $('#Telecharger').removeClass('btn-success');
    }
    const canvas = document.getElementById('Result_final');
    const context = canvas.getContext('2d');
    /** http://jsfiddle.net/x9m7b62e/1/ **/
    $('#Telecharger').click(function () {
        $('#Telecharger i').removeClass('fa-download');
        $('#Telecharger i').addClass('fa-circle-o-notch fa-spin');
        $('#Telecharger').addClass('btn-success');

        var result_BG = $('#Result_Background').attr('src');
        var result_BG_motif = $('#Result_Background_motif').attr('src');
        var result_Skin = $('#Result_Skin').attr('src');
        var result_Spot = $('#Result_Spot').attr('src');
        var result_Makeup = $('#Result_Makeup').attr('src');
        var result_Eyes = $('#Result_Eyes').attr('src');
        var result_Mouth = $('#Result_Mouth').attr('src');
        var result_Glasses_back = $('#Result_Glasses_back').attr('src');
        var result_Nose = $('#Result_Nose').attr('src');
        var result_Glasses = $('#Result_Glasses').attr('src');
        var result_Earring = $('#Result_Earring').attr('src');
        var result_Top = $('#Result_Top').attr('src');
        var result_Motif_Top = $('#Result_Motif_Top').attr('src');
        var result_Necklace = $('#Result_Necklace').attr('src');
        var result_Jacket = $('#Result_Jacket').attr('src');
        var result_Costums = $('#Result_Costums').attr('src');
        var result_Beard = $('#Result_Beard').attr('src');
        var result_Mustache = $('#Result_Mustache').attr('src');
        var result_Hair = $('#Result_Hair').attr('src');
        var result_Eyebrow = $('#Result_Eyebrow').attr('src');
        var Result_Hair_back = $('#Result_Hair_back').attr('src');
        var result_Hat_Hair_back = $('#Result_Hat_Hair_back').attr('src');
        var result_Hat_Hair = $('#Result_Hat_Hair').attr('src');
        var result_Hat_back = $('#Result_Hat_back').attr('src');
        var result_Hat = $('#Result_Hat').attr('src');
        context.clearRect(0, 0, canvas.width, canvas.height);

        var img_BG = loadImage(result_BG, generation_image);
        var img_BG_motif = loadImage(result_BG_motif, generation_image);
        var img_Skin = loadImage(result_Skin, generation_image);
        var img_Spot = loadImage(result_Spot, generation_image);
        var img_Marquillage = loadImage(result_Makeup, generation_image);
        var img_Eyes = loadImage(result_Eyes, generation_image);
        var img_Earring = loadImage(result_Earring, generation_image);
        var img_Mouth = loadImage(result_Mouth, generation_image);
        var img_Nose = loadImage(result_Nose, generation_image);
        var img_Top = loadImage(result_Top, generation_image);
        var img_Motif_Top = loadImage(result_Motif_Top, generation_image);
        var img_Necklace = loadImage(result_Necklace, generation_image);
        var img_Jacket = loadImage(result_Jacket, generation_image);
        var img_Costums = loadImage(result_Costums, generation_image);
        var img_Eyebrow = loadImage(result_Eyebrow, generation_image);
        var img_Beard = loadImage(result_Beard, generation_image);
        var img_Mustache = loadImage(result_Mustache, generation_image);

        var img_Hair = loadImage(result_Hair, generation_image);
        var img_Hair_back = loadImage(Result_Hair_back, generation_image);
        var img_Glasses = loadImage(result_Glasses, generation_image);
        var img_Glasses_back = loadImage(result_Glasses_back, generation_image);
        var img_Hat_Hair_back = loadImage(result_Hat_Hair_back, generation_image);
        var img_Hat_Hair = loadImage(result_Hat_Hair, generation_image);
        var img_Hat_back = loadImage(result_Hat_back, generation_image);
        var img_Hat = loadImage(result_Hat, generation_image);

        function generation_image() {

            // composite now
            context.drawImage(img_BG, 0, 0);
            context.drawImage(img_BG_motif, 0, 0);
            context.drawImage(img_Hat_back, 0, 0);
            context.drawImage(img_Hair_back, 0, 0);
            context.drawImage(img_Hat_Hair_back, 0, 0);
            context.drawImage(img_Skin, 0, 0);
            context.drawImage(img_Spot, 0, 0);
            context.drawImage(img_Marquillage, 0, 0);
            context.drawImage(img_Top, 0, 0);
            context.drawImage(img_Motif_Top, 0, 0);
            context.drawImage(img_Necklace, 0, 0);
            context.drawImage(img_Jacket, 0, 0);
            context.drawImage(img_Costums, 0, 0);
            context.drawImage(img_Beard, 0, 0);
            context.drawImage(img_Eyes, 0, 0);
            context.drawImage(img_Mouth, 0, 0);
            context.drawImage(img_Eyebrow, 0, 0);
            context.drawImage(img_Mustache, 0, 0);
            context.drawImage(img_Glasses_back, 0, 0);
            context.drawImage(img_Nose, 0, 0);
            context.drawImage(img_Glasses, 0, 0);
            context.drawImage(img_Earring, 0, 0);
            context.drawImage(img_Hair, 0, 0);
            context.drawImage(img_Hat_Hair, 0, 0);
            context.drawImage(img_Hat, 0, 0);
        }

        function loadImage(src, onload) {
            // http://www.thefutureoftheweb.com/blog/image-onload-isnt-being-called
            var img = new Image();
            img.onload = onload;
            img.src = src;
            img.crossOrigin = "anonymous";
            return img;
        }

        setTimeout(
            function () {
                const download_link = document.createElement('a');
                document.body.appendChild(download_link);
                download_link.setAttribute('href', canvas.toDataURL("image/png;base64"));
                download_link.download = 'avatar.png';
                // trigger download event
                download_link.click();
                clicklink();
            }, 1000)
    });
});