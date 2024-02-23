debugger;
indexes_array = [0,0,0,0,0] //0 - eyes, 1-eyebrows, 2-nose, 3-hair, 4-mouth
eyesrc = ['source/eyes/eyes_0.png', 'source/eyes/eyes_1.png', 'source/eyes/eyes_2.png', 'source/eyes/eyes_3.png', 'source/eyes/eyes_4.png', 'source/eyes/eyes_5.png', 'source/eyes/eyes_6.png', 'source/eyes/eyes_7.png', 'source/eyes/eyes_8.png', 'source/eyes/eyes_9.png', 'source/eyes/eyes_10.png'];
eyebrowsrc = ['source/eyebrows/eyebrows_0.png', 'source/eyebrows/eyebrows_1.png', 'source/eyebrows/eyebrows_2.png', 'source/eyebrows/eyebrows_3.png', 'source/eyebrows/eyebrows_4.png', 'source/eyebrows/eyebrows_5.png', 'source/eyebrows/eyebrows_6.png', 'source/eyebrows/eyebrows_7.png', 'source/eyebrows/eyebrows_8.png', 'source/eyebrows/eyebrows_9.png', 'source/eyebrows/eyebrows_10.png', 'source/eyebrows/eyebrows_11.png', 'source/eyebrows/eyebrows_12.png', 'source/eyebrows/eyebrows_13.png', 'source/eyebrows/eyebrows_14.png', 'source/eyebrows/eyebrows_15.png', ]
nosesrc = ['source/noses/noze_0.png', 'source/noses/noze_1.png', 'source/noses/noze_2.png', 'source/noses/noze_3.png', 'source/noses/noze_4.png', 'source/noses/noze_5.png', 'source/noses/noze_6.png', 'source/noses/noze_7.png', 'source/noses/noze_8.png', 'source/noses/noze_9.png', 'source/noses/noze_10.png', 'source/noses/noze_11.png']
hairsrc = ['source/hair/hair_0.png', 'source/hair/hair_1.png', 'source/hair/hair_2.png', 'source/hair/hair_3.png']
mouthsrc = ['source/mouth/mouth_0.png', 'source/mouth/mouth_1.png', 'source/mouth/mouth_2.png', 'source/mouth/mouth_3.png']

document.getElementById("button_right_eye").onclick = function(){(src_change_next(indexes_array,0, eyesrc, "eye_img"))};
document.getElementById("button_left_eye").onclick = function(){(src_change_previous(indexes_array,0, eyesrc, "eye_img"))};

document.getElementById("button_left_eyebrows").onclick = function(){(src_change_next(indexes_array,1, eyebrowsrc, "eyebrows_img"))};
document.getElementById("button_right_eyebrows").onclick = function(){(src_change_previous(indexes_array,1, eyebrowsrc, "eyebrows_img"))};

document.getElementById("button_right_nose").onclick = function(){(src_change_next(indexes_array,2, nosesrc, "nose_img"))};
document.getElementById("button_left_nose").onclick = function(){(src_change_previous(indexes_array,2, nosesrc, "nose_img"))};

document.getElementById("button_right_hair").onclick = function(){(src_change_next(indexes_array,3, hairsrc, "hair_img"))};
document.getElementById("button_left_hair").onclick = function(){(src_change_previous(indexes_array,3, hairsrc, "hair_img"))};

document.getElementById("button_right_mouth").onclick = function(){(src_change_next(indexes_array,4, mouthsrc, "mouth_img"))};
document.getElementById("button_left_mouth").onclick = function(){(src_change_previous(indexes_array,4, mouthsrc, "mouth_img"))};

function src_change_next(arr, ind, srcarr, id){
    arr[ind]++;
    if(arr[ind] > srcarr.length-1){
        arr[ind] = 0;
    }
    document.getElementById(id).src = srcarr[arr[ind]];
}
function src_change_previous(arr, ind, srcarr, id){
    arr[ind]--;
    if(arr[ind] < 0){
        arr[ind] = srcarr.length-1;
    }
    document.getElementById(id).src = srcarr[arr[ind]];
}