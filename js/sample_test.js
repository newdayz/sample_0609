'use strict';

const videoElements = document.querySelectorAll("#videos video");

const VideoAElement = videoElements[0];
const VideoBElement = videoElements[1];
const VideoCElement = videoElements[2];
const VideoDElement = videoElements[3];
const VideoEElement = videoElements[4];
const VideoFElement = videoElements[5];
const VideoGElement = videoElements[6];
const VideoHElement = videoElements[7];
const VideoIElement = videoElements[8];
const VideoJElement = videoElements[9];
const VideoKElement = videoElements[10];
const VideoLElement = videoElements[11];
const VideoMElement = videoElements[12];
const VideoNElement = videoElements[13];
const VideoOElement = videoElements[14];
const VideoPElement = videoElements[15];

videoElements.forEach(videoElement => {
  const src = videoElement.getAttribute('src');
  const type = videoElement.getAttribute('type');
  console.log("Source:", src);
  console.log("Type:", type);
  console.log("Media is ready for playback!");
});

const ClassA = document.querySelector(".vi_A");
const ClassB = document.querySelector(".vi_B");
const ClassC = document.querySelector(".vi_C");
const ClassD = document.querySelector(".vi_D");
const ClassE = document.querySelector(".vi_E");
const ClassF = document.querySelector(".vi_F");
const ClassG = document.querySelector(".vi_G");
const ClassH = document.querySelector(".vi_H");
const ClassI = document.querySelector(".vi_I");
const ClassJ = document.querySelector(".vi_J");
const ClassK = document.querySelector(".vi_K");
const ClassL = document.querySelector(".vi_L");
const ClassM = document.querySelector(".vi_M");
const ClassN = document.querySelector(".vi_N");
const ClassO = document.querySelector(".vi_O");
const ClassP = document.querySelector(".vi_P");

const btn_pause = document.getElementById('pause');
const btn_play = document.getElementById('play');

const Container = document.querySelector(".container");
const ProgressBar = document.getElementById("progress_bar");

const ProgressP_A = document.getElementById("progress_p_a");
const PlayTimeA = document.getElementById('play_position');
const ProgressA = document.getElementById('progress');
const end_position = document.getElementById('end_position');

const btn_mute = document.getElementById('mute');
const btn_unmute = document.getElementById('unmute');

const buttonB = document.getElementById('button_b');
const buttonC = document.getElementById('button_c');
const buttonD = document.getElementById('button_d');
const buttonE = document.getElementById('button_e');

const buttonF = document.getElementById('button_f');
const buttonG = document.getElementById('button_g');
const back_B_A = document.getElementById('back_b_a');

const buttonH = document.getElementById('button_h');
const buttonI = document.getElementById('button_i');
const back_C_A = document.getElementById('button_c_a');

const buttonJ = document.getElementById('button_j');
const buttonK = document.getElementById('button_k');
const buttonL = document.getElementById('button_l');
const back_D_A = document.getElementById('button_d_a');

const buttonE_Info = document.getElementById('button_e_info');
const back_E_A = document.getElementById('button_e_a');

const buttonF_Info = document.getElementById('button_f_info');
const opening_F_A = document.getElementById('button_f_a');
const back_F_B = document.getElementById('button_f_b');

const buttonG_Info = document.getElementById('button_g_info');
const opening_G_A = document.getElementById('button_g_a');
const back_G_B = document.getElementById('button_g_b');

const buttonM = document.getElementById('button_h_m');
const buttonN = document.getElementById('button_h_n');
const back_H_C = document.getElementById('button_h_c');

const buttonO = document.getElementById('button_i_o');
const buttonP = document.getElementById('button_i_p');
const back_I_C = document.getElementById('button_i_c');

const buttonJ_Info = document.getElementById('button_j_info');
const opening_J_A = document.getElementById('button_j_a');
const back_J_D = document.getElementById('button_j_d');

const buttonK_Info = document.getElementById('button_k_info');
const opening_K_A = document.getElementById('button_k_a');
const back_K_D = document.getElementById('button_k_d');

const buttonL_Info = document.getElementById('button_l_info');
const opening_L_A = document.getElementById('button_l_a');
const back_L_D = document.getElementById('button_l_d');

const buttonM_Info = document.getElementById('button_m_info');
const opening_M_A = document.getElementById('button_m_a');
const back_M_H = document.getElementById('button_m_h');

const buttonN_Info = document.getElementById('button_n_info');
const opening_N_A = document.getElementById('button_n_a');
const back_N_H = document.getElementById('button_n_h');

const buttonO_Info = document.getElementById('button_o_info');
const opening_O_A = document.getElementById('button_o_a');
const back_O_I = document.getElementById('button_o_i');

const buttonP_Info = document.getElementById('button_p_info');
const opening_P_A = document.getElementById('button_p_a');
const back_P_I = document.getElementById('button_p_i');

let timer = null;

function setProgressBarTimeout() {
  ProgressBar.style.display = "none";
}

VideoAElement.addEventListener("mouseover", (e) => {
  ProgressBar.style.display = "block";
  console.log(e);
});

VideoAElement.addEventListener("mousemove", (e) => {
  clearTimeout(timer);
  ProgressBar.style.display = "block";
  timer = setTimeout(() => {
    ProgressBar.style.display = "none";
  }, 3000);
  console.log(e);
});

btn_pause.addEventListener("mouseover", () => {
  ProgressBar.style.display = "block";
});

btn_pause.addEventListener("mouseout", () => {
  ProgressBar.style.display = "none";
});

btn_play.addEventListener("mouseover", () => {
  ProgressBar.style.display = "block";
  clearTimeout(timer);
});

ProgressA.addEventListener("mouseover", () => {
  ProgressBar.style.display = "block";
});

ProgressA.addEventListener("mouseout", () => {
  ProgressBar.style.display = "none";
});

btn_mute.addEventListener("mouseover", () => {
  ProgressBar.style.display = "block";
});

btn_mute.addEventListener("mouseout", () => {
  ProgressBar.style.display = "none";
});

btn_unmute.addEventListener("mouseover", () => {
  ProgressBar.style.display = "block";
});

btn_unmute.addEventListener("mouseout", () => {
  ProgressBar.style.display = "none";
});

buttonB.addEventListener("mouseover", () => {
  ProgressBar.style.display = "block";
});

buttonB.addEventListener("mouseout", () => {
  ProgressBar.style.display = "none";
});

buttonC.addEventListener("mouseover", () => {
  ProgressBar.style.display = "block";
});

buttonC.addEventListener("mouseout", () => {
  ProgressBar.style.display = "none";
});

buttonD.addEventListener("mouseover", () => {
  ProgressBar.style.display = "block";
});

buttonD.addEventListener("mouseout", () => {
  ProgressBar.style.display = "none";
});

buttonE.addEventListener("mouseover", () => {
  ProgressBar.style.display = "block";
});

buttonE.addEventListener("mouseout", () => {
  ProgressBar.style.display = "none";
});

let isTouchingprogressBar = false;
let progressAtimeout;
let touchTimer = null;

ProgressBar.style.display = "block";

VideoAElement.addEventListener("touchstart", (e) => {
  if (ProgressBar.style.display === "none") {
    ProgressBar.style.display = "block";
    touchTimer = setTimeout(setProgressBarTimeout, 3000);
  } else {
    clearTimeout(touchTimer);
    ProgressBar.style.display = "none";
  }
  console.log(e);
});

// ProgressBar.addEventListener("touchstart", (e) => {
//   isTouchingprogressBar = true;
//   clearTimeout(timer);
//   if (isTouchingprogressBar) {
//     ProgressBar.style.display = "block";
//   }
//   console.log(e);
// });

ProgressA.addEventListener("touchstart", (e) => {
  isTouchingprogressBar = true;
  if (isTouchingprogressBar) {
    clearTimeout(progressAtimeout);
    progressAtimeout = null;
  }
  console.log(e);
});

ProgressA.addEventListener("touchend", (e) => {
  if (VideoAElement.paused) {
    ProgressBar.style.display = "block";
    isTouchingprogressBar = true;
    if (isTouchingprogressBar) {
      clearTimeout(progressAtimeout);
      progressAtimeout = null;
    }
  } else {
    touchTimer = setTimeout(setProgressBarTimeout, 3000);
    isTouchingprogressBar = false;
  }
  console.log(e);
});

// btn_pause.addEventListener("touchstart", (e) => {
//   isTouchingprogressBar = true;
//   if (isTouchingprogressBar) {
//     clearTimeout(touchTimer);
//     ProgressBar.style.display = "block";
//   } else {
//     clearTimeout(touchTimer);
//     isTouchingprogressBar = false;
//     ProgressBar.style.display = "block";
//   }
//   console.log(e);
// });

// btn_play.addEventListener("touchstart", (e) => {
//   timer = setTimeout(setProgressBarTimeout, 3000);
//   isTouchingprogressBar = false;
//   console.log(e);
// });

// btn_mute.addEventListener("touchstart", (e) => {
//   timer = setTimeout(setProgressBarTimeout, 3000);
//   isTouchingprogressBar = false;
//   if (VideoAElement.paused) {
//     ProgressBar.style.display = "block";
//     isTouchingprogressBar = true;
//     if (isTouchingprogressBar) {
//       clearTimeout(progressAtimeout);
//       progressAtimeout = null;
//     }
//   } else {
//     timer = setTimeout(setProgressBarTimeout, 3000);
//     isTouchingprogressBar = false;
//   }
//   console.log(e);
// });

const convertTime = (time_position) => {
  time_position = Math.floor(time_position);
  let res = null;
  if (60 <= time_position) {
    res = Math.floor(time_position / 60);
    res += ':' + Math.floor(time_position % 60).toString().padStart(2, '0');
  } else {
    res = '0:' + Math.floor(time_position % 60).toString().padStart(2, '0');
  }
  return res;
};

ClassA.style.display = "block";
VideoAElement.muted = true;
VideoAElement.play();

let playtimer = null;

const startTimer = () => {
  playtimer = setInterval(() => {
    const currentTimeA = VideoAElement.currentTime;
    const durationA = VideoAElement.duration;

    if (!isNaN(currentTimeA) && !isNaN(durationA)) {
      const progressBarAValue = (currentTimeA / durationA) * 100;
      PlayTimeA.textContent = convertTime(currentTimeA);
      ProgressA.value = progressBarAValue;
    }

  }, 100);
  console.log('startTimer');
};

startTimer();

let isVideoABox = true;

if (isVideoABox) {
  VideoAElement.addEventListener('loadeddata', () => {
    const maxDuration = VideoAElement.duration;

    const formattedDuration = convertTime(maxDuration);
    end_position.textContent = `${formattedDuration}`;

    function resizeFix() {
      const windowWidth = document.documentElement.clientWidth;
      console.log(window.innerWidth);
      console.log(windowWidth);
      const windowHeight = document.documentElement.clientHeight;
      console.log(windowHeight);

      const aspectRatio = 16 / 9;

      if (windowWidth / windowHeight > aspectRatio) {
        const newWidth = windowHeight * aspectRatio;
        Container.style.width = newWidth + "px";
        Container.style.height = windowHeight + "px";
      } else {
        const newHeight = windowWidth / aspectRatio;
        Container.style.width = windowWidth + "px";
        Container.style.height = newHeight + "px";
      }
    }

    window.addEventListener("resize", resizeFix);
    resizeFix();


    const btn_pauseClickhandler_a = () => {
      if (!VideoAElement.paused) {
        VideoAElement.pause();
        stopTimer();
        btn_pause.style.display = 'none';
        btn_play.style.display = 'block';
        if (VideoAElement.paused) {
          ProgressBar.style.display = "block";
        }
        console.log('A一時停止をクリックしました');
      }
    };

    btn_pause.addEventListener("click", btn_pauseClickhandler_a);

    btn_pause.addEventListener("touchstart", (event) => {
      event.preventDefault();
      btn_pauseClickhandler_a();
    });

    const btn_playClickhandler_a = () => {
      if (VideoAElement.paused) {
        startTimer();
        VideoAElement.play();
        btn_play.style.display = 'none';
        btn_pause.style.display = 'block';
        if (!VideoAElement.paused) {
          timer = setTimeout(() => {
            ProgressBar.style.display = "none";
          }, 3000);
        }
        console.log('A再生アイコンをクリックしました');
      }
    };

    btn_play.addEventListener("click", btn_playClickhandler_a);

    btn_play.addEventListener("touchstart", (event) => {
      event.preventDefault();
      btn_playClickhandler_a();
    });

    btn_mute.addEventListener('click', () => {
      if (VideoAElement.muted) {
        VideoAElement.muted = false;
        btn_mute.style.display = 'none';
        btn_unmute.style.display = 'block';
        console.log('Aミュートを解除しました');
      }
    });

    btn_unmute.addEventListener('click', () => {
      if (!VideoAElement.muted) {
        VideoAElement.muted = true;
        btn_unmute.style.display = 'none';
        btn_mute.style.display = 'block';
        console.log('Aミュートをクリックしました');
      }
    });

    const stopTimer = () => {
      clearInterval(playtimer);
      console.log('stopTimer一時停止');
    };

    ProgressA.addEventListener('input', () => {
      stopTimer();
      const seekTime = calculateSeekTime(ProgressA.value);
      if (!isNaN(seekTime) && isFinite(seekTime) && seekTime >= 0 && seekTime <= VideoAElement.duration) {
        VideoAElement.currentTime = seekTime;
        console.log('Aプログレスバーを操作しました');
      }
    });

    ProgressA.addEventListener('change', () => {
      startTimer();
      console.log('Aプログレスバーの操作が完了しました');
    });

    const calculateSeekTime = (progressValue) => {
      return (progressValue / 100) * VideoAElement.duration;
    };

    const isVideoVisible = true;

    VideoAElement.addEventListener('timeupdate', () => {
      const currentTimeA = VideoAElement.currentTime;

      PlayTimeA.textContent = convertTime(currentTimeA);
      end_position.textContent = convertTime(VideoAElement.duration);

      if (currentTimeA >= 88) {
        buttonB.style.display = 'block';
        const clickHandler_b = () => {
          if (isVideoVisible) {
            ClassA.style.zIndex = "29";
            VideoAElement.currentTime = 0;
            VideoAElement.pause();
            ProgressBar.style.zIndex = "-29";
            ProgressBar.style.display = "none";


            if (VideoAElement.muted) {
              VideoBElement.muted = true;
              MuteBtnB.style.display = "block";
              UnmuteBtnB.style.display = "none";
            } else if (!VideoAElement.muted) {
              VideoBElement.muted = false;
              UnmuteBtnB.style.display = "block";
              MuteBtnB.style.display = "none";
            }

            VideoBElement.play();
            ClassB.style.zIndex = "290";
            ProgressBarB.style.zIndex = "291";

            console.log('button1をクリックしました');
          }
        };

        buttonB.addEventListener("click", clickHandler_b);

        buttonB.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_b();
          setTimeout(() => {
            ProgressBar.style.display = "none";
          }, 3000);
        });
      } else {
        buttonB.style.display = 'none';
      }

      if (currentTimeA >= 93) {
        buttonC.style.display = 'block';
        const clickHandler_c = () => {
          if (isVideoVisible) {
            ClassA.style.zIndex = "29";
            VideoAElement.currentTime = 0;
            VideoAElement.pause();
            ProgressBar.style.zIndex = "-29";
            ProgressBar.style.display = "none";


            if (VideoAElement.muted) {
              VideoCElement.muted = true;
              MuteBtnC.style.display = "block";
              UnmuteBtnC.style.display = "none";
            } else if (!VideoAElement.muted) {
              VideoCElement.muted = false;
              UnmuteBtnC.style.display = "block";
              MuteBtnC.style.display = "none";
            }

            VideoCElement.play();
            ClassC.style.zIndex = "290";
            ProgressBarC.style.zIndex = "291";

            console.log('button2をクリックしました');
          }
        };
        buttonC.addEventListener("click", clickHandler_c);

        buttonC.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_c();
          setTimeout(() => {
            ProgressBar.style.display = "none";
          }, 3000);
        });
      } else {
        buttonC.style.display = 'none';
      }

      if (currentTimeA >= 99) {
        buttonD.style.display = 'block';
        const clickHandler_d = () => {
          if (isVideoVisible) {
            ClassA.style.zIndex = "29";
            VideoAElement.currentTime = 0;
            VideoAElement.pause();
            ProgressBar.style.zIndex = "-29";
            ProgressBar.style.display = "none";

            VideoDElement.play();
            ClassD.style.zIndex = "290";
            ProgressBarD.style.zIndex = "291";

            if (VideoAElement.muted) {
              VideoDElement.muted = true;
              MuteBtnD.style.display = "block";
              UnmuteBtnD.style.display = "none";
            } else if (!VideoAElement.muted) {
              VideoDElement.muted = false;
              UnmuteBtnD.style.display = "block";
              MuteBtnD.style.display = "none";
            }

            console.log('button3をクリックしました');
          }
        };
        buttonD.addEventListener("click", clickHandler_d);

        buttonD.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_d();
          setTimeout(() => {
            ProgressBar.style.display = "none";
          }, 3000);
        });
      } else {
        buttonD.style.display = 'none';
      }

      if (currentTimeA >= 103) {
        buttonE.style.display = 'block';
        const clickHandler_e = () => {
          if (isVideoVisible) {
            ClassA.style.zIndex = "29";
            VideoAElement.currentTime = 0;
            VideoAElement.pause();
            ProgressBar.style.zIndex = "-29";
            ProgressBar.style.display = "none";


            VideoEElement.play();
            ClassE.style.zIndex = "290";
            ProgressBarE.style.zIndex = "291";

            if (VideoAElement.muted) {
              VideoEElement.muted = true;
              MuteBtnE.style.display = "block";
              UnmuteBtnE.style.display = "none";
            } else if (!VideoAElement.muted) {
              VideoEElement.muted = false;
              UnmuteBtnE.style.display = "block";
              MuteBtnE.style.display = "none";
            }

            console.log('button4をクリックしました');
          }
        };
        buttonE.addEventListener("click", clickHandler_e);

        buttonE.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_e();
          setTimeout(() => {
            ProgressBar.style.display = "none";
          }, 3000);
        });
      } else {
        buttonE.style.display = 'none';
      }

      if (currentTimeA >= 132) {
        VideoAElement.pause();
        btn_pause.style.display = "none";
        btn_play.style.display = "block";
      }
      console.log('TimeUpDateA');
    });
    console.log('loadeddataA');
  });
}

const interactive_Videos = document.querySelector(".interactive_videos");

// クローンB
let ProgressBarB = ProgressBar.cloneNode(true);
ProgressBarB.id = "progress_bar_b";
interactive_Videos.appendChild(ProgressBarB);
ProgressBarB.style.zIndex = "-1";
ProgressBarB.style.display = "none";

const BackGroundBarB = ProgressBarB.querySelector("#background_bar");
BackGroundBarB.id = "background_bar_b";

const ControlsButtonB = ProgressBarB.querySelector("#controls_button");
ControlsButtonB.id = "controls_button_b";

let PauseBtnB = ControlsButtonB.querySelector("#pause");
PauseBtnB.id = "pause_b";
let PlayBtnB = ControlsButtonB.querySelector("#play");
PlayBtnB.id = "play_b";
ControlsButtonB.appendChild(PauseBtnB);
ControlsButtonB.appendChild(PlayBtnB);

const ProgressP_B = ProgressBarB.querySelector("#progress_p_a");
ProgressP_B.id = "progress_p_b";

let PlayTimeB = ProgressP_B.querySelector("#play_position");
let ProgressB = ProgressP_B.querySelector("#progress");
let EndTimeB = ProgressP_B.querySelector("#end_position");
PlayTimeB.id = "playtime_b";
ProgressB.id = "progress_b";
EndTimeB.id = "endtime_b";

const ContorolsSoundB = ProgressBarB.querySelector("#controls_sound");
ContorolsSoundB.id = "controls_sound_b";

let MuteBtnB = ContorolsSoundB.querySelector("#mute");
let UnmuteBtnB = ContorolsSoundB.querySelector("#unmute");
MuteBtnB.id = "mute_b";
UnmuteBtnB.id = "unmute_b";

VideoBElement.addEventListener("mouseover", () => {
  ProgressBarB.style.display = "block";
});

VideoBElement.addEventListener("mouseout", () => {
  ProgressBarB.style.display = "none";
});

ProgressBarB.addEventListener("mouseover", () => {
  ProgressBarB.style.display = "block";
});

ProgressBarB.addEventListener("mouseout", () => {
  ProgressBarB.style.display = "none";
});

buttonF.addEventListener("mouseover", () => {
  ProgressBarB.style.display = "block";
});

buttonF.addEventListener("mouseout", () => {
  ProgressBarB.style.display = "none";
});

buttonG.addEventListener("mouseover", () => {
  ProgressBarB.style.display = "block";
});

buttonG.addEventListener("mouseout", () => {
  ProgressBarB.style.display = "none";
});

back_B_A.addEventListener("mouseover", () => {
  ProgressBarB.style.display = "block";
});

back_B_A.addEventListener("mouseout", () => {
  ProgressBarB.style.display = "none";
});

let progressBtimeout;

function setProgressBarBTimeout() {
  progressBtimeout = setTimeout(() => {
    ProgressBarB.style.display = "none";
  }, 3000);
}

VideoBElement.addEventListener("touchstart", () => {
  ProgressBarB.style.display = "block";
});

VideoBElement.addEventListener("touchend", () => {
  setProgressBarBTimeout();
});

ProgressB.addEventListener("touchstart", () => {
  isTouchingprogressBar = true;
  if (isTouchingprogressBar) {
    clearTimeout(progressBtimeout);
    progressBtimeout = null;
  }
});

ProgressB.addEventListener("touchend", () => {
  if (VideoBElement.paused) {
    ProgressBarB.style.display = "block";
    isTouchingprogressBar = true;
    if (isTouchingprogressBar) {
      clearTimeout(progressBtimeout);
      progressBtimeout = null;
    }
  } else {
    setProgressBarBTimeout();
    isTouchingprogressBar = false;
  }
});

PauseBtnB.addEventListener("touchstart", () => {
  ProgressBarB.style.display = "block";
  isTouchingprogressBar = true;
  if (isTouchingprogressBar) {
    clearTimeout(progressBtimeout);
    progressBtimeout = null;
  }
});

PlayBtnB.addEventListener("touchstart", () => {
  setProgressBarBTimeout();
  isTouchingprogressBar = false;
});

let playtimerB = null;

const startTimerB = () => {
  playtimerB = setInterval(() => {
    const currentTimeB = VideoBElement.currentTime;
    const durationB = VideoBElement.duration;

    if (!isNaN(currentTimeB) && !isNaN(durationB)) {
      const progressBarBValue = (currentTimeB / durationB) * 100;
      PlayTimeB.textContent = convertTime(currentTimeB);
      ProgressB.value = progressBarBValue;
    }

  }, 100);
  console.log('startTimerB');
};

let isVideoBBox = true;

if (isVideoBBox) {
  VideoBElement.addEventListener('loadeddata', () => {
    const maxDurationB = VideoBElement.duration;

    const formattedDurationB = convertTime(maxDurationB);
    EndTimeB.textContent = `${formattedDurationB}`;

    startTimerB();

    PauseBtnB.addEventListener('click', () => {
      if (!VideoBElement.paused) {
        VideoBElement.pause();
        stopTimerB();
        PauseBtnB.style.display = 'none';
        PlayBtnB.style.display = 'block';
        console.log('B一時停止をクリックしました');
      }
    });

    PlayBtnB.addEventListener('click', () => {
      if (VideoBElement.paused) {
        startTimerB();
        VideoBElement.play();
        PlayBtnB.style.display = 'none';
        PauseBtnB.style.display = 'block';
        console.log('再生Bアイコンをクリックしました');
      }
    });

    MuteBtnB.addEventListener('click', () => {
      if (VideoBElement.muted) {
        VideoBElement.muted = false;
        MuteBtnB.style.display = 'none';
        UnmuteBtnB.style.display = 'block';
        console.log('Bミュートを解除しました');
      }
    });

    UnmuteBtnB.addEventListener('click', () => {
      if (!VideoBElement.muted) {
        VideoBElement.muted = true;
        UnmuteBtnB.style.display = 'none';
        MuteBtnB.style.display = 'block';
        console.log('Bミュートをクリックしました');
      }
    });

    const stopTimerB = () => {
      VideoBElement.addEventListener("pause", () => {
        clearInterval(playtimerB);
        console.log('stopTimerB一時停止');
      });
    };

    ProgressB.addEventListener('input', () => {
      stopTimerB();
      const seekTimeB = calculateSeekTimeB(ProgressB.value);
      if (!isNaN(seekTimeB) && isFinite(seekTimeB) && seekTimeB >= 0 && seekTimeB <= VideoBElement.duration) {
        VideoBElement.currentTime = seekTimeB;
        console.log('Bプログレスバーを操作しました');
      }
    });

    ProgressB.addEventListener('change', () => {
      startTimerB();
      console.log('Bプログレスバーの操作が完了しました');
    });

    const calculateSeekTimeB = (progressValue) => {
      return (progressValue / 100) * VideoBElement.duration;
    };

    const isVideoVisibleB = true;

    VideoBElement.addEventListener('timeupdate', () => {
      const currentTimeB = VideoBElement.currentTime;

      PlayTimeB.textContent = convertTime(VideoBElement.currentTime);
      EndTimeB.textContent = convertTime(VideoBElement.duration);

      if (currentTimeB >= 150) {
        buttonF.style.display = 'block';
        const clickHandler_f = () => {
          if (isVideoVisibleB) {
            ClassB.style.zIndex = "28";
            VideoBElement.currentTime = 0;
            VideoBElement.pause();
            ProgressBarB.style.zIndex = "-28";
            ProgressBarB.style.display = "none";

            VideoFElement.play();
            ClassF.style.zIndex = "290";
            ProgressBarF.style.zIndex = "291";

            if (VideoBElement.muted) {
              VideoFElement.muted = true;
              MuteBtnF.style.display = "block";
              UnmuteBtnF.style.display = "none";
            } else if (!VideoBElement.muted) {
              VideoFElement.muted = false;
              UnmuteBtnF.style.display = "block";
              MuteBtnF.style.display = "none";
            }

            console.log('button01Bをクリックしました');
          }
        };
        buttonF.addEventListener("click", clickHandler_f);

        buttonF.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_f();
          setTimeout(() => {
            ProgressBarB.style.display = "none";
          }, 3000);
        });
      } else {
        buttonF.style.display = 'none';
      }

      if (currentTimeB >= 154) {
        buttonG.style.display = 'block';
        const clickHandler_g = () => {
          if (isVideoVisibleB) {
            ClassB.style.zIndex = "28";
            VideoBElement.currentTime = 0;
            VideoBElement.pause();
            ProgressBarB.style.zIndex = "-28";
            ProgressBarB.style.display = "none";


            VideoGElement.play();
            ClassG.style.zIndex = "290";
            ProgressBarG.style.zIndex = "291";

            if (VideoBElement.muted) {
              VideoGElement.muted = true;
              MuteBtnG.style.display = "block";
              UnmuteBtnG.style.display = "none";
            } else if (!VideoBElement.muted) {
              VideoGElement.muted = false;
              UnmuteBtnG.style.display = "block";
              MuteBtnG.style.display = "none";
            }

            console.log('button02をクリックしました');
          }
        };
        buttonG.addEventListener("click", clickHandler_g);

        buttonG.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_g();
          setTimeout(() => {
            ProgressBarB.style.display = "none";
          }, 3000);
        });
      } else {
        buttonG.style.display = 'none';
      }

      if (currentTimeB >= 164) {
        back_B_A.style.display = 'block';
        const clickHandler_back_b_a = () => {
          if (isVideoVisibleB) {
            ClassB.style.zIndex = "28";
            VideoBElement.currentTime = 0;
            VideoBElement.pause();
            ProgressBarB.style.zIndex = "-28";
            ProgressBarB.style.display = "none";


            if (VideoBElement.muted) {
              VideoAElement.muted = true;
              btn_mute.style.display = "block";
              btn_unmute.style.display = "none";
            } else if (!VideoBElement.muted) {
              VideoAElement.muted = false;
              btn_unmute.style.display = "block";
              btn_mute.style.display = "none";
            }

            VideoAElement.play();
            ClassA.style.zIndex = "290";
            ProgressBar.style.zIndex = "291";

            console.log('button03をクリックしました');
          }
        };
        back_B_A.addEventListener("click", clickHandler_back_b_a);

        back_B_A.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_back_b_a();
          setTimeout(() => {
            ProgressBarB.style.display = "none";
          }, 3000);
        });
      } else {
        back_B_A.style.display = 'none';
      }
      if (currentTimeB >= 182) {
        VideoBElement.pause();
        PauseBtnB.style.display = "none";
        PlayBtnB.style.display = "block";
      }

      console.log('TimeUpDateBが発生しました');
    });

    console.log('LoadeddataB');
  });
}

//  Video C Element

let ProgressBarC = ProgressBar.cloneNode(true);
ProgressBarC.id = "progress_bar_c";
interactive_Videos.appendChild(ProgressBarC);
ProgressBarC.style.zIndex = "-2";
ProgressBarC.style.display = "none";

const BackGroundBarC = ProgressBarC.querySelector("#background_bar");
BackGroundBarC.id = "background_bar_c";

const ControlsButtonC = ProgressBarC.querySelector("#controls_button");
ControlsButtonC.id = "controls_button_c";

let PauseBtnC = ControlsButtonC.querySelector("#pause");
PauseBtnC.id = "pause_c";
let PlayBtnC = ControlsButtonC.querySelector("#play");
PlayBtnC.id = "play_c";
ControlsButtonC.appendChild(PauseBtnC);
ControlsButtonC.appendChild(PlayBtnC);

const ProgressP_C = ProgressBarC.querySelector("#progress_p_a");
ProgressP_C.id = "progress_p_c";

let PlayTimeC = ProgressP_C.querySelector("#play_position");
let ProgressC = ProgressP_C.querySelector("#progress");
let EndTimeC = ProgressP_C.querySelector("#end_position");
PlayTimeC.id = "playtime_c";
ProgressC.id = "progress_c";
EndTimeC.id = "endtime_c";

const ContorolsSoundC = ProgressBarC.querySelector("#controls_sound");
ContorolsSoundC.id = "controls_sound_c";

let MuteBtnC = ContorolsSoundC.querySelector("#mute");
let UnmuteBtnC = ContorolsSoundC.querySelector("#unmute");
MuteBtnC.id = "mute_c";
UnmuteBtnC.id = "unmute_c";

VideoCElement.addEventListener("mouseover", () => {
  ProgressBarC.style.display = "block";
});

VideoCElement.addEventListener("mouseout", () => {
  ProgressBarC.style.display = "none";
});

ProgressBarC.addEventListener("mouseover", () => {
  ProgressBarC.style.display = "block";
});

ProgressBarC.addEventListener("mouseout", () => {
  ProgressBarC.style.display = "none";
});

buttonH.addEventListener("mouseover", () => {
  ProgressBarC.style.display = "block";
});

buttonH.addEventListener("mouseout", () => {
  ProgressBarC.style.display = "none";
});

buttonI.addEventListener("mouseover", () => {
  ProgressBarC.style.display = "block";
});

buttonI.addEventListener("mouseout", () => {
  ProgressBarC.style.display = "none";
});

back_C_A.addEventListener("mouseover", () => {
  ProgressBarC.style.display = "block";
});

back_C_A.addEventListener("mouseout", () => {
  ProgressBarC.style.display = "none";
});

let progressCtimeout;

function setProgressBarCTimeout() {
  progressCtimeout = setTimeout(() => {
    ProgressBarC.style.display = "none";
  }, 3000);
}

VideoCElement.addEventListener("touchstart", () => {
  ProgressBarC.style.display = "block";
});

VideoCElement.addEventListener("touchend", () => {
  setProgressBarCTimeout();
});

ProgressC.addEventListener("touchstart", () => {
  isTouchingprogressBar = true;
  if (isTouchingprogressBar) {
    clearTimeout(progressCtimeout);
    progressCtimeout = null;
  }
});

ProgressC.addEventListener("touchend", () => {
  if (VideoCElement.paused) {
    ProgressBarC.style.display = "block";
    isTouchingprogressBar = true;
    if (isTouchingprogressBar) {
      clearTimeout(progressCtimeout);
      progressCtimeout = null;
    }
  } else {
    setProgressBarCTimeout();
    isTouchingprogressBar = false;
  }
});

PauseBtnC.addEventListener("touchstart", () => {
  isTouchingprogressBar = true;
  if (isTouchingprogressBar) {
    clearTimeout(progressCtimeout);
    progressCtimeout = null;
  }
});

PlayBtnC.addEventListener("touchstart", () => {
  setProgressBarCTimeout();
  isTouchingprogressBar = false;
});

let playtimerC = null;

const startTimerC = () => {
  playtimerC = setInterval(() => {
    const currentTimeC = VideoCElement.currentTime;
    const durationC = VideoCElement.duration;

    if (!isNaN(currentTimeC) && !isNaN(durationC)) {
      const progressBarCValue = (currentTimeC / durationC) * 100;
      PlayTimeC.textContent = convertTime(currentTimeC);
      ProgressC.value = progressBarCValue;
    }

  }, 100);
  console.log('startTimerC');
};

VideoCElement.addEventListener('loadeddata', () => {
  const maxDurationC = VideoCElement.duration;
  const formattedDurationC = convertTime(maxDurationC);
  EndTimeC.textContent = `${formattedDurationC}`;

  startTimerC();

  PauseBtnC.addEventListener('click', () => {
    if (!VideoCElement.paused) {
      VideoCElement.pause();
      stopTimerC();
      PauseBtnC.style.display = 'none';
      PlayBtnC.style.display = 'block';
      console.log('C一時停止をクリックしました');
    }
  });

  PlayBtnC.addEventListener('click', () => {
    if (VideoCElement.paused) {
      startTimerC();
      VideoCElement.play();
      PlayBtnC.style.display = 'none';
      PauseBtnC.style.display = 'block';
      console.log('C再生をクリック');
    }
  });

  MuteBtnC.addEventListener('click', () => {
    if (VideoCElement.muted) {
      VideoCElement.muted = false;
      MuteBtnC.style.display = 'none';
      UnmuteBtnC.style.display = 'block';
      console.log('Cミュートを解除しました');
    }
  });

  UnmuteBtnC.addEventListener('click', () => {
    if (!VideoCElement.muted) {
      VideoCElement.muted = true;
      UnmuteBtnC.style.display = 'none';
      MuteBtnC.style.display = 'block';
      console.log('Cミュートをクリックしました');
    }
  });

  const stopTimerC = () => {
    VideoCElement.addEventListener("pause", () => {
      clearInterval(playtimerC);
      console.log('stopTimerC一時停止');
    });
  };

  ProgressC.addEventListener('input', () => {
    stopTimerC();
    const seekTimeC = calculateSeekTimeC(ProgressC.value);
    if (!isNaN(seekTimeC) && isFinite(seekTimeC) && seekTimeC >= 0 && seekTimeC <= VideoCElement.duration) {
      VideoCElement.currentTime = seekTimeC;
      console.log('Cプログレスバーを操作しました');
    }
  });

  ProgressC.addEventListener('change', () => {
    startTimerC();
    console.log('Cプログレスバーの操作が完了しました');
  });

  const calculateSeekTimeC = (progressValue) => {
    return (progressValue / 100) * VideoCElement.duration;
  };

  const isVideoVisibleC = true;

  VideoCElement.addEventListener('timeupdate', () => {
    const currentTimeC = VideoCElement.currentTime;

    PlayTimeC.textContent = convertTime(VideoCElement.currentTime);
    EndTimeC.textContent = convertTime(VideoCElement.duration);


    if (currentTimeC >= 72) {
      buttonH.style.display = 'block';
      const clickHandler_h = () => {
        if (isVideoVisibleC) {
          ClassC.style.zIndex = "27";
          VideoCElement.currentTime = 0;
          VideoCElement.pause();
          ProgressBarC.style.zIndex = "-27";
          ProgressBarC.style.display = "none";


          if (VideoCElement.muted) {
            VideoHElement.muted = true;
            MuteBtnH.style.display = "block";
            UnmuteBtnH.style.display = "none";
          } else if (!VideoCElement.muted) {
            VideoHElement.muted = false;
            UnmuteBtnH.style.display = "block";
            MuteBtnH.style.display = "none";
          }

          VideoHElement.play();
          ClassH.style.zIndex = "290";
          ProgressBarH.style.zIndex = "291";

          console.log('button01Cをクリックしました');
        }
      };
      buttonH.addEventListener("click", clickHandler_h);

      buttonH.addEventListener("touchstart", (event) => {
        event.preventDefault();
        clickHandler_h();
        setTimeout(() => {
          ProgressBarC.style.display = "none";
        }, 3000);
      });
    } else {
      buttonH.style.display = 'none';
    }

    if (currentTimeC >= 78) {
      buttonI.style.display = 'block';
      const clickHandler_i = () => {
        if (isVideoVisibleC) {
          ClassC.style.zIndex = "27";
          VideoCElement.currentTime = 0;
          VideoCElement.pause();
          ProgressBarC.style.zIndex = "-27";
          ProgressBarC.style.display = "none";


          if (VideoCElement.muted) {
            VideoIElement.muted = true;
            MuteBtnI.style.display = "block";
            UnmuteBtnI.style.display = "none";
          } else if (!VideoCElement.muted) {
            VideoIElement.muted = false;
            UnmuteBtnI.style.display = "block";
            MuteBtnI.style.display = "none";
          }

          VideoIElement.play();
          ClassI.style.zIndex = "290";
          ProgressBarI.style.zIndex = "291";

          console.log('button02Cをクリックしました');
        }
      };
      buttonI.addEventListener("click", clickHandler_i);

      buttonI.addEventListener("touchstart", (event) => {
        event.preventDefault();
        clickHandler_i();
        setTimeout(() => {
          ProgressBarC.style.display = "none";
        }, 3000);
      });
    } else {
      buttonI.style.display = 'none';
    }

    if (currentTimeC >= 89) {
      back_C_A.style.display = 'block';
      const clickHandler_back_c_a = () => {
        if (isVideoVisibleC) {
          ClassC.style.zIndex = "27";
          VideoCElement.currentTime = 0;
          VideoCElement.pause();
          ProgressBarC.style.zIndex = "-27";
          ProgressBarC.style.display = "none";


          if (VideoCElement.muted) {
            VideoAElement.muted = true;
            btn_mute.style.display = "block";
            btn_unmute.style.display = "none";
          } else if (!VideoCElement.muted) {
            VideoAElement.muted = false;
            btn_unmute.style.display = "block";
            btn_mute.style.display = "none";
          }

          VideoAElement.play();
          ClassA.style.zIndex = "290";
          ProgressBar.style.zIndex = "291";

          console.log('button03Cをクリックしました');
        }
      };
      back_C_A.addEventListener("click", clickHandler_back_c_a);

      back_C_A.addEventListener("touchstart", (event) => {
        event.preventDefault();
        clickHandler_back_c_a();
        setTimeout(() => {
          ProgressBarC.style.display = "none";
        }, 3000);
      });
    } else {
      back_C_A.style.display = 'none';
    }

    if (currentTimeC >= 106) {
      PauseBtnC.style.display = "none";
      PlayBtnC.style.display = "block";
      VideoCElement.pause();
    }

    console.log('timeupdateC');
  });

  console.log('loadeddataC');
});

// Insurance D

let ProgressBarD = ProgressBar.cloneNode(true);
ProgressBarD.id = "progress_bar_d";
interactive_Videos.appendChild(ProgressBarD);
ProgressBarD.style.zIndex = "-3";
ProgressBarD.style.display = "none";

const BackGroundBarD = ProgressBarD.querySelector("#background_bar");
BackGroundBarD.id = "background_bar_d";

const ControlsButtonD = ProgressBarD.querySelector("#controls_button");
ControlsButtonD.id = "controls_button_d";

let PauseBtnD = ControlsButtonD.querySelector("#pause");
PauseBtnD.id = "pause_d";
let PlayBtnD = ControlsButtonD.querySelector("#play");
PlayBtnD.id = "play_d";
ControlsButtonD.appendChild(PauseBtnD);
ControlsButtonD.appendChild(PlayBtnD);

const ProgressP_D = ProgressBarD.querySelector("#progress_p_a");
ProgressP_D.id = "progress_p_d";

let PlayTimeD = ProgressP_D.querySelector("#play_position");
let ProgressD = ProgressP_D.querySelector("#progress");
let EndTimeD = ProgressP_D.querySelector("#end_position");
PlayTimeD.id = "playtime_d";
ProgressD.id = "progress_d";
EndTimeD.id = "endtime_d";

const ContorolsSoundD = ProgressBarD.querySelector("#controls_sound");
ContorolsSoundD.id = "controls_sound_d";

let MuteBtnD = ContorolsSoundD.querySelector("#mute");
let UnmuteBtnD = ContorolsSoundD.querySelector("#unmute");
MuteBtnD.id = "mute_d";
UnmuteBtnD.id = "unmute_d";

VideoDElement.addEventListener("mouseover", () => {
  ProgressBarD.style.display = "block";
});

VideoDElement.addEventListener("mouseout", () => {
  ProgressBarD.style.display = "none";
});

ProgressBarD.addEventListener("mouseover", () => {
  ProgressBarD.style.display = "block";
});

ProgressBarD.addEventListener("mouseout", () => {
  ProgressBarD.style.display = "none";
});

buttonJ.addEventListener("mouseover", () => {
  ProgressBarD.style.display = "block";
});

buttonJ.addEventListener("mouseout", () => {
  ProgressBarD.style.display = "none";
});

buttonK.addEventListener("mouseover", () => {
  ProgressBarD.style.display = "block";
});

buttonK.addEventListener("mouseout", () => {
  ProgressBarD.style.display = "none";
});

buttonL.addEventListener("mouseover", () => {
  ProgressBarD.style.display = "block";
});

buttonL.addEventListener("mouseout", () => {
  ProgressBarD.style.display = "none";
});

back_D_A.addEventListener("mouseover", () => {
  ProgressBarD.style.display = "block";
});

back_D_A.addEventListener("mouseout", () => {
  ProgressBarD.style.display = "none";
});

let progressDtimeout;

function setProgressBarDTimeout() {
  progressDtimeout = setTimeout(() => {
    ProgressBarD.style.display = "none";
  }, 3000);
}

VideoDElement.addEventListener("touchstart", () => {
  ProgressBarD.style.display = "block";
});

VideoDElement.addEventListener("touchend", () => {
  setProgressBarDTimeout();
});

ProgressD.addEventListener("touchstart", () => {
  isTouchingprogressBar = true;
  if (isTouchingprogressBar) {
    clearTimeout(progressDtimeout);
    progressDtimeout = null;
  }
});

ProgressD.addEventListener("touchend", () => {
  if (VideoDElement.paused) {
    ProgressBarD.style.display = "block";
    isTouchingprogressBar = true;
    if (isTouchingprogressBar) {
      clearTimeout(progressDtimeout);
      progressDtimeout = null;
    }
  } else {
    setProgressBarDTimeout();
    isTouchingprogressBar = false;
  }
});

PauseBtnD.addEventListener("touchstart", () => {
  isTouchingprogressBar = true;
  if (isTouchingprogressBar) {
    clearTimeout(progressDtimeout);
    progressDtimeout = null;
  }
});

PlayBtnD.addEventListener("touchstart", () => {
  setProgressBarDTimeout();
  isTouchingprogressBar = false;
});

let playtimerD = null;

const startTimerD = () => {
  playtimerD = setInterval(() => {
    const currentTimeD = VideoDElement.currentTime;
    const durationD = VideoDElement.duration;

    if (!isNaN(currentTimeD) && !isNaN(durationD)) {
      const progressBarDValue = (currentTimeD / durationD) * 100;
      PlayTimeD.textContent = convertTime(currentTimeD);
      ProgressD.value = progressBarDValue;
    }

  }, 100);
  console.log('startTimerD');
};

VideoDElement.addEventListener('loadeddata', () => {
  const maxDurationD = VideoDElement.duration;
  const formattedDurationD = convertTime(maxDurationD);
  EndTimeD.textContent = `${formattedDurationD}`;

  startTimerD();

  PauseBtnD.addEventListener('click', () => {
    if (!VideoDElement.paused) {
      VideoDElement.pause();
      stopTimerD();
      PauseBtnD.style.display = 'none';
      PlayBtnD.style.display = 'block';
      console.log('D一時停止をクリックしました');
    }
  });

  PlayBtnD.addEventListener('click', () => {
    if (VideoDElement.paused) {
      startTimerD();
      VideoDElement.play();
      PlayBtnD.style.display = 'none';
      PauseBtnD.style.display = 'block';
      console.log('D再生をクリックしました');
    }
  });

  MuteBtnD.addEventListener('click', () => {
    if (VideoDElement.muted) {
      VideoDElement.muted = false;
      MuteBtnD.style.display = 'none';
      UnmuteBtnD.style.display = 'block';
      console.log('Dミュートを解除しました');
    }
  });

  UnmuteBtnD.addEventListener('click', () => {
    if (!VideoDElement.muted) {
      VideoDElement.muted = true;
      UnmuteBtnD.style.display = 'none';
      MuteBtnD.style.display = 'block';
      console.log('Dミュートをクリックしました');
    }
  });

  const stopTimerD = () => {
    VideoDElement.addEventListener("pause", () => {
      clearInterval(playtimerD);
      console.log('stopTimerD');
    });
  };

  ProgressD.addEventListener('input', () => {
    stopTimerD();
    const seekTimeD = calculateSeekTimeD(ProgressD.value);
    if (!isNaN(seekTimeD) && isFinite(seekTimeD) && seekTimeD >= 0 && seekTimeD <= VideoDElement.duration) {
      VideoDElement.currentTime = seekTimeD;
      console.log('Dプログレスバーを操作しました');
    }
  });

  ProgressD.addEventListener('change', () => {
    startTimerD();
    console.log('プログレスバーDの操作が完了しました');
  });

  const calculateSeekTimeD = (progressValue) => {
    return (progressValue / 100) * VideoDElement.duration;
  };

  const isVideoVisibleD = true;

  VideoDElement.addEventListener('timeupdate', () => {
    const currentTimeD = VideoDElement.currentTime;

    PlayBtnD.textContent = convertTime(VideoDElement.currentTime);
    EndTimeD.textContent = convertTime(VideoDElement.duration);

    if (currentTimeD >= 70) {
      buttonJ.style.display = 'block';
      const clickHandler_j = () => {
        if (isVideoVisibleD) {
          ClassD.style.zIndex = "26";
          VideoDElement.currentTime = 0;
          VideoDElement.pause();
          ProgressBarD.style.zIndex = "-26";
          ProgressBarD.style.display = "none";


          if (VideoDElement.muted) {
            VideoJElement.muted = true;
            MuteBtnJ.style.display = "block";
            UnmuteBtnJ.style.display = "none";
          } else if (!VideoDElement.muted) {
            VideoJElement.muted = false;
            UnmuteBtnJ.style.display = "block";
            MuteBtnJ.style.display = "none";
          }

          VideoJElement.play();
          ClassJ.style.zIndex = "290";
          ProgressBarJ.style.zIndex = "291";

          console.log('button1Dをクリックしました');
        }
      };
      buttonJ.addEventListener("click", clickHandler_j);

      buttonJ.addEventListener("touchstart", (event) => {
        event.preventDefault();
        clickHandler_j();
        setTimeout(() => {
          ProgressBarD.style.display = "none";
        }, 3000);
      });
    } else {
      buttonJ.style.display = 'none';
    }

    if (currentTimeD >= 75) {
      buttonK.style.display = 'block';
      const clickHandler_k = () => {
        if (isVideoVisibleD) {
          ClassD.style.zIndex = "26";
          VideoDElement.currentTime = 0;
          VideoDElement.pause();
          ProgressBarD.style.zIndex = "-26";
          ProgressBarD.style.display = "none";


          if (VideoDElement.muted) {
            VideoKElement.muted = true;
            MuteBtnK.style.display = "block";
            UnmuteBtnK.style.display = "none";
          } else if (!VideoDElement.muted) {
            VideoKElement.muted = false;
            UnmuteBtnK.style.display = "block";
            MuteBtnK.style.display = "none";
          }

          VideoKElement.play();
          ClassK.style.zIndex = "290";
          ProgressBarK.style.zIndex = "291";

          console.log('button2Dをクリックしました');
        }
      };
      buttonK.addEventListener("click", clickHandler_k);

      buttonK.addEventListener("touchstart", (event) => {
        event.preventDefault();
        clickHandler_k();
        setTimeout(() => {
          ProgressBarD.style.display = "none";
        }, 3000);
      });
    } else {
      buttonK.style.display = 'none';
    }

    if (currentTimeD >= 81) {
      buttonL.style.display = 'block';
      const clickHandler_l = () => {
        if (isVideoVisibleD) {
          ClassD.style.zIndex = "26";
          VideoDElement.currentTime = 0;
          VideoDElement.pause();
          ProgressBarD.style.zIndex = "-26";
          ProgressBarD.style.display = "none";


          if (VideoDElement.muted) {
            VideoLElement.muted = true;
            MuteBtnL.style.display = "block";
            UnmuteBtnL.style.display = "none";
          } else if (!VideoDElement.muted) {
            VideoLElement.muted = false;
            UnmuteBtnL.style.display = "block";
            MuteBtnL.style.display = "none";
          }

          VideoLElement.play();
          ClassL.style.zIndex = "290";
          ProgressBarL.style.zIndex = "291";

          console.log('button3Dをクリックしました');
        }
      };
      buttonL.addEventListener("click", clickHandler_l);

      buttonL.addEventListener("touchstart", (event) => {
        event.preventDefault();
        clickHandler_l();
        setTimeout(() => {
          ProgressBarD.style.display = "none";
        }, 3000);
      });
    } else {
      buttonL.style.display = 'none';
    }

    if (currentTimeD >= 92) {
      back_D_A.style.display = 'block';
      const clickHandler_back_d_a = () => {
        if (isVideoVisibleD) {
          ClassD.style.zIndex = "26";
          VideoDElement.currentTime = 0;
          VideoDElement.pause();
          ProgressBarD.style.zIndex = "-26";
          ProgressBarD.style.display = "none";


          if (VideoDElement.muted) {
            VideoAElement.muted = true;
            btn_mute.style.display = "block";
            btn_unmute.style.display = "none";
          } else if (!VideoDElement.muted) {
            VideoAElement.muted = false;
            btn_unmute.style.display = "block";
            btn_mute.style.display = "none";
          }

          VideoAElement.play();
          ClassA.style.zIndex = "290";
          ProgressBar.style.zIndex = "291";

          console.log('button4Dをクリックしました');
        }
      };
      back_D_A.addEventListener("click", clickHandler_back_d_a);

      back_D_A.addEventListener("touchstart", (event) => {
        event.preventDefault();
        clickHandler_back_d_a();
        setTimeout(() => {
          ProgressBarD.style.display = "none";
        }, 3000);
      });
    } else {
      back_D_A.style.display = 'none';
    }

    if (currentTimeD >= 109) {
      PauseBtnD.style.display = "none";
      PlayBtnD.style.display = "block";
      VideoDElement.pause();
    }

    console.log('DtimeupdateD');
  });
  console.log('loadeddataDが発生しました');
});


// // Video E Element

let ProgressBarE = ProgressBar.cloneNode(true);
ProgressBarE.id = "progress_bar_e";
interactive_Videos.appendChild(ProgressBarE);
ProgressBarE.style.zIndex = "-4";
ProgressBarE.style.display = "none";

const BackGroundBarE = ProgressBarE.querySelector("#background_bar");
BackGroundBarE.id = "background_bar_e";

const ControlsButtonE = ProgressBarE.querySelector("#controls_button");
ControlsButtonE.id = "controls_button_e";

let PauseBtnE = ControlsButtonE.querySelector("#pause");
PauseBtnE.id = "pause_b";
let PlayBtnE = ControlsButtonE.querySelector("#play");
PlayBtnE.id = "play_b";
ControlsButtonE.appendChild(PauseBtnE);
ControlsButtonE.appendChild(PlayBtnE);

const ProgressP_E = ProgressBarE.querySelector("#progress_p_a");
ProgressP_E.id = "progress_p_e";

let PlayTimeE = ProgressP_E.querySelector("#play_position");
let ProgressE = ProgressP_E.querySelector("#progress");
let EndTimeE = ProgressP_E.querySelector("#end_position");
PlayTimeE.id = "playtime_e";
ProgressE.id = "progress_e";
EndTimeE.id = "endtime_e";

const ContorolsSoundE = ProgressBarE.querySelector("#controls_sound");
ContorolsSoundE.id = "controls_sound_e";

let MuteBtnE = ContorolsSoundE.querySelector("#mute");
let UnmuteBtnE = ContorolsSoundE.querySelector("#unmute");
MuteBtnE.id = "mute_e";
UnmuteBtnE.id = "unmute_e";

VideoEElement.addEventListener("mouseover", () => {
  ProgressBarE.style.display = "block";
});

VideoEElement.addEventListener("mouseout", () => {
  ProgressBarE.style.display = "none";
});

ProgressBarE.addEventListener("mouseover", () => {
  ProgressBarE.style.display = "block";
});

ProgressBarE.addEventListener("mouseout", () => {
  ProgressBarE.style.display = "none";
});

buttonE_Info.addEventListener("mouseover", () => {
  ProgressBarE.style.display = "block";
});

buttonE_Info.addEventListener("mouseout", () => {
  ProgressBarE.style.display = "none";
});

back_E_A.addEventListener("mouseover", () => {
  ProgressBarE.style.display = "block";
});

back_E_A.addEventListener("mouseout", () => {
  ProgressBarE.style.display = "none";
});

let progressEtimeout;

function setProgressBarETimeout() {
  progressEtimeout = setTimeout(() => {
    ProgressBarE.style.display = "none";
  }, 3000);
}

VideoEElement.addEventListener("touchstart", () => {
  ProgressBarE.style.display = "block";
});

VideoEElement.addEventListener("touchend", () => {
  setProgressBarETimeout();
});

ProgressE.addEventListener("touchstart", () => {
  isTouchingprogressBar = true;
  if (isTouchingprogressBar) {
    clearTimeout(progressEtimeout);
    progressEtimeout = null;
  }
});

ProgressE.addEventListener("touchend", () => {
  if (VideoEElement.paused) {
    ProgressBarE.style.display = "block";
    isTouchingprogressBar = true;
    if (isTouchingprogressBar) {
      clearTimeout(progressEtimeout);
      progressEtimeout = null;
    }
  } else {
    setProgressBarETimeout();
    isTouchingprogressBar = false;
  }
});

PauseBtnE.addEventListener("touchstart", () => {
  isTouchingprogressBar = true;
  if (isTouchingprogressBar) {
    clearTimeout(progressEtimeout);
    progressEtimeout = null;
  }
});

PlayBtnE.addEventListener("touchstart", () => {
  setProgressBarETimeout();
  isTouchingprogressBar = false;
});

let playtimerE = null;

const startTimerE = () => {
  playtimerE = setInterval(() => {
    const currentTimeE = VideoEElement.currentTime;
    const durationE = VideoEElement.duration;

    if (!isNaN(currentTimeE) && !isNaN(durationE)) {
      const progressBarEValue = (currentTimeE / durationE) * 100;
      PlayTimeE.textContent = convertTime(currentTimeE);
      ProgressE.value = progressBarEValue;
    }

  }, 100);
  console.log('startTimerE');
};

let isVideoBoxE = true;

if (isVideoBoxE) {
  VideoEElement.addEventListener('loadeddata', () => {
    const maxDurationE = VideoEElement.duration;

    const formattedDurationE = convertTime(maxDurationE);
    EndTimeE.textContent = `${formattedDurationE}`;

    PauseBtnE.addEventListener('click', () => {
      if (!VideoEElement.paused) {
        VideoEElement.pause();
        stopTimerE();
        PauseBtnE.style.display = 'none';
        PlayBtnE.style.display = 'block';
        console.log('E一時停止をクリックしました');
      }
    });

    PlayBtnE.addEventListener('click', () => {
      if (VideoEElement.paused) {
        startTimerE();
        VideoEElement.play();
        PlayBtnE.style.display = 'none';
        PauseBtnE.style.display = 'block';
        console.log('再生Eアイコンをクリックしました');
      }
    });


    MuteBtnE.addEventListener('click', () => {
      if (VideoEElement.muted) {
        VideoEElement.muted = false;
        MuteBtnE.style.display = 'none';
        UnmuteBtnE.style.display = 'block';
        console.log('Bミュートを解除しました');
      }
    });

    UnmuteBtnE.addEventListener('click', () => {
      if (!VideoEElement.muted) {
        VideoEElement.muted = true;
        UnmuteBtnE.style.display = 'none';
        MuteBtnE.style.display = 'block';
        console.log('Eミュートをクリックしました');
      }
    });

    const stopTimerE = () => {
      VideoEElement.addEventListener("pause", () => {
        clearInterval(playtimerE);
        console.log('stopTimerE');
      });
    };

    ProgressE.addEventListener('input', () => {
      stopTimerE();
      const seekTimeE = calculateSeekTimeE(ProgressE.value);
      if (!isNaN(seekTimeE) && isFinite(seekTimeE) && seekTimeE >= 0 && seekTimeE <= VideoEElement.duration) {
        VideoEElement.currentTime = seekTimeE;
        console.log('Eプログレスバーを操作しました');
      }
    });

    ProgressE.addEventListener('change', () => {
      startTimerE();
      console.log('Eプログレスバーの操作が完了しました');
    });

    const calculateSeekTimeE = (progressValue) => {
      return (progressValue / 100) * VideoEElement.duration;
    };

    const isVideoVisibleE = true;

    VideoEElement.addEventListener('timeupdate', () => {
      const currentTimeE = VideoEElement.currentTime;

      PlayTimeE.textContent = convertTime(VideoEElement.currentTime);
      EndTimeE.textContent = convertTime(VideoEElement.duration);


      if (currentTimeE >= 256) {
        buttonE_Info.style.display = 'block';
        const clickHandler_e_info = () => {
          if (isVideoVisibleE) {

            VideoEElement.pause();
            PauseBtnE.style.display = "none";
            PlayBtnE.style.display = "block";

            console.log('buttonE_Infoをクリックしました');
          }
        };
        buttonE_Info.addEventListener("click", clickHandler_e_info);

        buttonE_Info.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_e_info();
          setTimeout(() => {
            ProgressBarE.style.display = "none";
          }, 3000);
        });
      } else {
        buttonE_Info.style.display = 'none';
      }

      if (currentTimeE >= 256) {
        back_E_A.style.display = 'block';
        const clickHandler_back_e_a = () => {
          if (isVideoVisibleE) {
            ClassE.style.zIndex = "25";
            VideoEElement.currentTime = 0;
            VideoEElement.pause();
            ProgressBarE.style.zIndex = "-25";
            ProgressBarE.style.display = "none";


            if (VideoEElement.muted) {
              VideoAElement.muted = true;
              btn_mute.style.display = "block";
              btn_unmute.style.display = "none";
            } else if (!VideoEElement.muted) {
              VideoAElement.muted = false;
              btn_unmute.style.display = "block";
              btn_mute.style.display = "none";
            }

            VideoAElement.play();
            ClassA.style.zIndex = "290";
            ProgressBar.style.zIndex = "291";

            console.log('back_E_Aをクリックしました');
          }
        };
        back_E_A.addEventListener("click", clickHandler_back_e_a);

        back_E_A.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_back_e_a();
          setTimeout(() => {
            ProgressBarE.style.display = "none";
          }, 3000);
        });
      } else {
        back_E_A.style.display = 'none';
      }

      if (currentTimeE >= 272) {
        PauseBtnE.style.display = "none";
        PlayBtnE.style.display = "block";
        VideoEElement.pause();
      }

      console.log('TimeUpDateE');
    });

    console.log('LoadeddataE');
  });
}

// Insurance F

let ProgressBarF = ProgressBar.cloneNode(true);
ProgressBarF.id = "progress_bar_f";
interactive_Videos.appendChild(ProgressBarF);
ProgressBarF.style.zIndex = "-5";
ProgressBarF.style.display = "none";

const BackGroundBarF = ProgressBarF.querySelector("#background_bar");
BackGroundBarF.id = "background_bar_f";

const ControlsButtonF = ProgressBarF.querySelector("#controls_button");
ControlsButtonF.id = "controls_button_f";

let PauseBtnF = ControlsButtonF.querySelector("#pause");
PauseBtnF.id = "pause_f";
let PlayBtnF = ControlsButtonF.querySelector("#play");
PlayBtnF.id = "play_f";
ControlsButtonF.appendChild(PauseBtnF);
ControlsButtonF.appendChild(PlayBtnF);

const ProgressP_F = ProgressBarF.querySelector("#progress_p_a");
ProgressP_F.id = "progress_p_f";

let PlayTimeF = ProgressP_F.querySelector("#play_position");
let ProgressF = ProgressP_F.querySelector("#progress");
let EndTimeF = ProgressP_F.querySelector("#end_position");
PlayTimeF.id = "playtime_f";
ProgressF.id = "progress_f";
EndTimeF.id = "endtime_f";

const ContorolsSoundF = ProgressBarF.querySelector("#controls_sound");
ContorolsSoundF.id = "controls_sound_f";

let MuteBtnF = ContorolsSoundF.querySelector("#mute");
let UnmuteBtnF = ContorolsSoundF.querySelector("#unmute");
MuteBtnF.id = "mute_f";
UnmuteBtnF.id = "unmute_f";

VideoFElement.addEventListener("mouseover", () => {
  ProgressBarF.style.display = "block";
});

VideoFElement.addEventListener("mouseout", () => {
  ProgressBarF.style.display = "none";
});

ProgressBarF.addEventListener("mouseover", () => {
  ProgressBarF.style.display = "block";
});

ProgressBarF.addEventListener("mouseout", () => {
  ProgressBarF.style.display = "none";
});

buttonF_Info.addEventListener("mouseover", () => {
  ProgressBarF.style.display = "block";
});

buttonF_Info.addEventListener("mouseout", () => {
  ProgressBarF.style.display = "none";
});

opening_F_A.addEventListener("mouseover", () => {
  ProgressBarF.style.display = "block";
});

opening_F_A.addEventListener("mouseout", () => {
  ProgressBarF.style.display = "none";
});

back_F_B.addEventListener("mouseover", () => {
  ProgressBarF.style.display = "block";
});

back_F_B.addEventListener("mouseout", () => {
  ProgressBarF.style.display = "none";
});

let progressFtimeout;

function setProgressBarFTimeout() {
  progressFtimeout = setTimeout(() => {
    ProgressBarF.style.display = "none";
  }, 3000);
}

VideoFElement.addEventListener("touchstart", () => {
  ProgressBarF.style.display = "block";
});

VideoFElement.addEventListener("touchend", () => {
  setProgressBarFTimeout();
});

ProgressF.addEventListener("touchstart", () => {
  isTouchingprogressBar = true;
  if (isTouchingprogressBar) {
    clearTimeout(progressFtimeout);
    progressFtimeout = null;
  }
});

ProgressF.addEventListener("touchend", () => {
  if (VideoFElement.paused) {
    ProgressBarF.style.display = "block";
    isTouchingprogressBar = true;
    if (isTouchingprogressBar) {
      clearTimeout(progressFtimeout);
      progressFtimeout = null;
    }
  } else {
    setProgressBarFTimeout();
    isTouchingprogressBar = false;
  }
});

PauseBtnF.addEventListener("touchstart", () => {
  isTouchingprogressBar = true;
  if (isTouchingprogressBar) {
    clearTimeout(progressFtimeout);
    progressFtimeout = null;
  }
});

PlayBtnF.addEventListener("touchstart", () => {
  setProgressBarFTimeout();
  isTouchingprogressBar = false;
});

let playtimerF = null;

const startTimerF = () => {
  playtimerF = setInterval(() => {
    const currentTimeF = VideoFElement.currentTime;
    const durationF = VideoFElement.duration;

    if (!isNaN(currentTimeF) && !isNaN(durationF)) {
      const progressBarFValue = (currentTimeF / durationF) * 100;
      PlayTimeF.textContent = convertTime(currentTimeF);
      ProgressF.value = progressBarFValue;
    }

  }, 100);
  console.log('startTimerF');
};

let isVideoBoxF = true;

if (isVideoBoxF) {
  VideoFElement.addEventListener('loadeddata', () => {
    const maxDurationF = VideoFElement.duration;

    const formattedDurationF = convertTime(maxDurationF);
    EndTimeF.textContent = `${formattedDurationF}`;

    if (ClassB.style.zIndex = "28") {
      startTimerF();
    }

    PauseBtnF.addEventListener('click', () => {
      if (!VideoFElement.paused) {
        VideoFElement.pause();
        stopTimerF();
        PauseBtnF.style.display = 'none';
        PlayBtnF.style.display = 'block';
        console.log('F一時停止をクリックしました');
      }
    });

    PlayBtnF.addEventListener('click', () => {
      if (VideoFElement.paused) {
        startTimerF();
        VideoFElement.play();
        PlayBtnF.style.display = 'none';
        PauseBtnF.style.display = 'block';
        console.log('再生Fアイコンをクリックしました');
      }
    });


    MuteBtnF.addEventListener('click', () => {
      if (VideoFElement.muted) {
        VideoFElement.muted = false;
        MuteBtnF.style.display = 'none';
        UnmuteBtnF.style.display = 'block';
        console.log('Fミュートを解除しました');
      }
    });

    UnmuteBtnF.addEventListener('click', () => {
      if (!VideoFElement.muted) {
        VideoFElement.muted = true;
        UnmuteBtnF.style.display = 'none';
        MuteBtnF.style.display = 'block';
        console.log('Fミュートをクリックしました');
      }
    });

    const stopTimerF = () => {
      VideoFElement.addEventListener("pause", () => {
        clearInterval(playtimerF);
        console.log('stopTimerF一時停止');
      });
    };

    ProgressF.addEventListener('input', () => {
      stopTimerF();
      const seekTimeF = calculateSeekTimeF(ProgressF.value);
      if (!isNaN(seekTimeF) && isFinite(seekTimeF) && seekTimeF >= 0 && seekTimeF <= VideoFElement.duration) {
        VideoFElement.currentTime = seekTimeF;
        console.log('Fプログレスバーを操作しました');
      }
    });

    ProgressF.addEventListener('change', () => {
      startTimerF();
      console.log('Fプログレスバーの操作が完了しました');
    });

    const calculateSeekTimeF = (progressValue) => {
      return (progressValue / 100) * VideoFElement.duration;
    };

    const isVideoVisibleF = true;

    VideoFElement.addEventListener('timeupdate', () => {
      const currentTimeF = VideoFElement.currentTime;

      PlayTimeF.textContent = convertTime(VideoFElement.currentTime);
      EndTimeF.textContent = convertTime(VideoFElement.duration);

      if (currentTimeF >= 338) {
        buttonF_Info.style.display = 'block';
        const clickHandler_f_info = () => {
          if (isVideoVisibleF) {

            VideoFElement.pause();
            if (VideoFElement.pause) {
              PauseBtnF.style.display = "none";
              PlayBtnF.style.display = "block";
            }

            console.log('buttonF_Infoをクリックしました');
          }
        };
        buttonF_Info.addEventListener("click", clickHandler_f_info);

        buttonF_Info.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_f_info();
          setTimeout(() => {
            ProgressBarF.style.display = "none";
          }, 3000);
        });
      } else {
        buttonF_Info.style.display = 'none';
      }

      if (currentTimeF >= 338) {
        opening_F_A.style.display = 'block';
        const clickHandler_opening_f_a = () => {
          if (isVideoVisibleF) {
            ClassF.style.zIndex = "24";
            VideoFElement.currentTime = 0;
            VideoFElement.pause();
            ProgressBarF.style.zIndex = "-24";
            ProgressBarF.style.display = "none";


            if (VideoFElement.muted) {
              VideoAElement.muted = true;
              btn_mute.style.display = "block";
              btn_unmute.style.display = "none";
            } else if (!VideoFElement.muted) {
              VideoAElement.muted = false;
              btn_unmute.style.display = "block";
              btn_mute.style.display = "none";
            }

            VideoAElement.play();
            ClassA.style.zIndex = "290";
            ProgressBar.style.zIndex = "291";

            console.log('opening_F_Aをクリックしました');
          }
        };
        opening_F_A.addEventListener("click", clickHandler_opening_f_a);

        opening_F_A.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_opening_f_a();
          setTimeout(() => {
            ProgressBarF.style.display = "none";
          }, 3000);
        });
      } else {
        opening_F_A.style.display = 'none';
      }

      if (currentTimeF >= 338) {
        back_F_B.style.display = 'block';
        const clickHandler_back_f_b = () => {
          if (isVideoVisibleF) {
            ClassF.style.zIndex = "24";
            VideoFElement.currentTime = 0;
            VideoFElement.pause();
            ProgressBarF.style.zIndex = "-24";
            ProgressBarF.style.display = "none";


            if (VideoFElement.muted) {
              VideoBElement.muted = true;
              MuteBtnB.style.display = "block";
              UnmuteBtnB.style.display = "none";
            } else if (!VideoFElement.muted) {
              VideoBElement.muted = false;
              UnmuteBtnB.style.display = "block";
              MuteBtnB.style.display = "none";
            }

            VideoBElement.muted = false;
            VideoBElement.play();
            UnmuteBtnB.style.display = "block";
            MuteBtnB.style.display = "none";
            ClassB.style.zIndex = "290";
            ProgressBarB.style.zIndex = "291";

            console.log('back_F_Bをクリックしました');
          }
        };
        back_F_B.addEventListener("click", clickHandler_back_f_b);

        back_F_B.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_back_f_b();
          setTimeout(() => {
            ProgressBarF.style.display = "none";
          }, 3000);
        });
      } else {
        back_F_B.style.display = 'none';
      }
      if (currentTimeF >= 355) {
        PauseBtnF.style.display = "none";
        PlayBtnF.style.display = "block";
        VideoFElement.pause();
      }

      console.log('TimeUpDateF');
    });

    console.log('LoadeddataF');
  });
}

// Insurance G

let ProgressBarG = ProgressBar.cloneNode(true);
ProgressBarG.id = "progress_bar_g";
interactive_Videos.appendChild(ProgressBarG);
ProgressBarG.style.zIndex = "-6";
ProgressBarG.style.display = "none";

const BackGroundBarG = ProgressBarG.querySelector("#background_bar");
BackGroundBarG.id = "background_bar_g";

const ControlsButtonG = ProgressBarG.querySelector("#controls_button");
ControlsButtonG.id = "controls_button_g";

let PauseBtnG = ControlsButtonG.querySelector("#pause");
PauseBtnG.id = "pause_g";
let PlayBtnG = ControlsButtonG.querySelector("#play");
PlayBtnG.id = "play_g";
ControlsButtonG.appendChild(PauseBtnG);
ControlsButtonG.appendChild(PlayBtnG);

const ProgressP_G = ProgressBarG.querySelector("#progress_p_a");
ProgressP_G.id = "progress_p_g";

let PlayTimeG = ProgressP_G.querySelector("#play_position");
let ProgressG = ProgressP_G.querySelector("#progress");
let EndTimeG = ProgressP_G.querySelector("#end_position");
PlayTimeG.id = "playtime_g";
ProgressG.id = "progress_g";
EndTimeG.id = "endtime_g";

const ContorolsSoundG = ProgressBarG.querySelector("#controls_sound");
ContorolsSoundG.id = "controls_sound_g";

let MuteBtnG = ContorolsSoundG.querySelector("#mute");
let UnmuteBtnG = ContorolsSoundG.querySelector("#unmute");
MuteBtnG.id = "mute_g";
UnmuteBtnG.id = "unmute_g";

VideoGElement.addEventListener("mouseover", () => {
  ProgressBarG.style.display = "block";
});

VideoGElement.addEventListener("mouseout", () => {
  ProgressBarG.style.display = "none";
});

ProgressBarG.addEventListener("mouseover", () => {
  ProgressBarG.style.display = "block";
});

ProgressBarG.addEventListener("mouseout", () => {
  ProgressBarG.style.display = "none";
});

buttonG_Info.addEventListener("mouseover", () => {
  ProgressBarG.style.display = "block";
});

buttonG_Info.addEventListener("mouseout", () => {
  ProgressBarG.style.display = "none";
});

opening_G_A.addEventListener("mouseover", () => {
  ProgressBarG.style.display = "block";
});

opening_G_A.addEventListener("mouseout", () => {
  ProgressBarG.style.display = "none";
});

back_G_B.addEventListener("mouseover", () => {
  ProgressBarG.style.display = "block";
});

back_G_B.addEventListener("mouseout", () => {
  ProgressBarG.style.display = "none";
});

let progressGtimeout;

function setProgressBarGTimeout() {
  progressGtimeout = setTimeout(() => {
    ProgressBarG.style.display = "none";
  }, 3000);
}

VideoGElement.addEventListener("touchstart", () => {
  ProgressBarG.style.display = "block";
});

VideoGElement.addEventListener("touchend", () => {
  setProgressBarGTimeout();
});

ProgressG.addEventListener("touchstart", () => {
  isTouchingprogressBar = true;
  if (isTouchingprogressBar) {
    clearTimeout(progressGtimeout);
    progressGtimeout = null;
  }
});

ProgressG.addEventListener("touchend", () => {
  if (VideoGElement.paused) {
    ProgressBarG.style.display = "block";
    isTouchingprogressBar = true;
    if (isTouchingprogressBar) {
      clearTimeout(progressGtimeout);
      progressGtimeout = null;
    }
  } else {
    setProgressBarGTimeout();
    isTouchingprogressBar = false;
  }
});

PauseBtnG.addEventListener("touchstart", () => {
  isTouchingprogressBar = true;
  if (isTouchingprogressBar) {
    clearTimeout(progressGtimeout);
    progressGtimeout = null;
  }
});

PlayBtnG.addEventListener("touchstart", () => {
  setProgressBarGTimeout();
  isTouchingprogressBar = false;
});

let playtimerG = null;

const startTimerG = () => {
  playtimerG = setInterval(() => {
    const currentTimeG = VideoGElement.currentTime;
    const durationG = VideoGElement.duration;

    if (!isNaN(currentTimeG) && !isNaN(durationG)) {
      const progressBarGValue = (currentTimeG / durationG) * 100;
      PlayTimeG.textContent = convertTime(currentTimeG);
      ProgressG.value = progressBarGValue;
    }

  }, 100);
  console.log('startTimerG');
};

let isVideoBoxG = true;

if (isVideoBoxG) {
  VideoGElement.addEventListener('loadeddata', () => {
    const maxDurationG = VideoGElement.duration;

    const formattedDurationG = convertTime(maxDurationG);
    EndTimeG.textContent = `${formattedDurationG}`;

    if (ClassB.style.zIndex = "28") {
      startTimerG();
    }

    PauseBtnG.addEventListener('click', () => {
      if (!VideoGElement.paused) {
        VideoGElement.pause();
        stopTimerG();
        PauseBtnG.style.display = 'none';
        PlayBtnG.style.display = 'block';
        console.log('G一時停止をクリックしました');
      }
    });

    PlayBtnG.addEventListener('click', () => {
      if (VideoGElement.paused) {
        startTimerG();
        VideoGElement.play();
        PlayBtnG.style.display = 'none';
        PauseBtnG.style.display = 'block';
        console.log('再生Gアイコンをクリックしました');
      }
    });

    MuteBtnG.addEventListener('click', () => {
      if (VideoGElement.muted) {
        VideoGElement.muted = false;
        MuteBtnG.style.display = 'none';
        UnmuteBtnG.style.display = 'block';
        console.log('Gミュートを解除しました');
      }
    });

    UnmuteBtnG.addEventListener('click', () => {
      if (!VideoGElement.muted) {
        VideoGElement.muted = true;
        UnmuteBtnG.style.display = 'none';
        MuteBtnG.style.display = 'block';
        console.log('Gミュートをクリックしました');
      }
    });

    const stopTimerG = () => {
      VideoGElement.addEventListener("pause", () => {
        clearInterval(playtimerG);
        console.log('stopTimerG一時停止');
      });
    };

    ProgressG.addEventListener('input', () => {
      stopTimerG();
      const seekTimeG = calculateSeekTimeG(ProgressG.value);
      if (!isNaN(seekTimeG) && isFinite(seekTimeG) && seekTimeG >= 0 && seekTimeG <= VideoGElement.duration) {
        VideoGElement.currentTime = seekTimeG;
        console.log('Gプログレスバーを操作しました');
      }
    });

    ProgressG.addEventListener('change', () => {
      startTimerG();
      console.log('Gプログレスバーの操作が完了しました');
    });

    const calculateSeekTimeG = (progressValue) => {
      return (progressValue / 100) * VideoGElement.duration;
    };

    const isVideoVisibleG = true;

    VideoGElement.addEventListener('timeupdate', () => {
      const currentTimeG = VideoGElement.currentTime;

      PlayTimeG.textContent = convertTime(VideoGElement.currentTime);
      EndTimeG.textContent = convertTime(VideoGElement.duration);


      if (currentTimeG >= 183) {
        buttonG_Info.style.display = 'block';
        const clickHandler_g_info = () => {
          if (isVideoVisibleG) {

            VideoGElement.pause();
            if (VideoGElement.pause) {
              PlayBtnG.style.display = "block";
              PauseBtnG.style.display = "none";
            }

            console.log('buttonG_Infoをクリックしました');
          }
        };
        buttonG_Info.addEventListener("click", clickHandler_g_info);

        buttonG_Info.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_g_info();
          setTimeout(() => {
            ProgressBarG.style.display = "none";
          }, 3000);
        });
      } else {
        buttonG_Info.style.display = 'none';
      }

      if (currentTimeG >= 183) {
        opening_G_A.style.display = 'block';
        const clickHandler_opening_g_a = () => {
          if (isVideoVisibleG) {
            ClassG.style.zIndex = "23";
            VideoGElement.currentTime = 0;
            VideoGElement.pause();
            ProgressBarG.style.zIndex = "-23";
            ProgressBarG.style.display = "none";


            if (VideoGElement.muted) {
              VideoAElement.muted = true;
              btn_mute.style.display = "block";
              btn_unmute.style.display = "none";
            } else if (!VideoGElement.muted) {
              VideoAElement.muted = false;
              btn_unmute.style.display = "block";
              btn_mute.style.display = "none";
            }

            VideoAElement.play();
            ClassA.style.zIndex = "290";
            ProgressBar.style.zIndex = "291";

            console.log('opening_G_Aをクリックしました');
          }
        };
        opening_G_A.addEventListener("click", clickHandler_opening_g_a);

        opening_G_A.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_opening_g_a();
          setTimeout(() => {
            ProgressBarG.style.display = "none";
          }, 3000);
        });
      } else {
        opening_G_A.style.display = 'none';
      }

      if (currentTimeG >= 183) {
        back_G_B.style.display = 'block';
        const clickHandler_back_g_b = () => {
          if (isVideoVisibleG) {
            ClassG.style.zIndex = "23";
            VideoGElement.currentTime = 0;
            VideoGElement.pause();
            ProgressBarG.style.zIndex = "-23";
            ProgressBarG.style.display = "none";


            if (VideoGElement.muted) {
              VideoBElement.muted = true;
              MuteBtnB.style.display = "block";
              UnmuteBtnB.style.display = "none";
            } else if (!VideoGElement.muted) {
              VideoBElement.muted = false;
              UnmuteBtnB.style.display = "block";
              MuteBtnB.style.display = "none";
            }

            VideoBElement.play();
            ClassB.style.zIndex = "290";
            ProgressBarB.style.zIndex = "291";

            console.log('back_G_Bをクリックしました');
          }
        };
        back_G_B.addEventListener("click", clickHandler_back_g_b);

        back_G_B.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_back_g_b();
          setTimeout(() => {
            ProgressBarG.style.display = "none";
          }, 3000);
        });
      } else {
        back_G_B.style.display = 'none';
      }
      if (currentTimeG >= 200) {
        PauseBtnG.style.display = "none";
        PlayBtnG.style.display = "block";
        VideoGElement.pause();
      }

      console.log('TimeUpDateG');
    });

    console.log('LoadeddataG');
  });
}

// Insurance H
let ProgressBarH = ProgressBar.cloneNode(true);
ProgressBarH.id = "progress_bar_h";
interactive_Videos.appendChild(ProgressBarH);
ProgressBarH.style.zIndex = "-7";
ProgressBarH.style.display = "none";

const BackGroundBarH = ProgressBarH.querySelector("#background_bar");
BackGroundBarH.id = "background_bar_h";

const ControlsButtonH = ProgressBarH.querySelector("#controls_button");
ControlsButtonH.id = "controls_button_h";

let PauseBtnH = ControlsButtonH.querySelector("#pause");
PauseBtnH.id = "pause_h";
let PlayBtnH = ControlsButtonH.querySelector("#play");
PlayBtnH.id = "play_h";
ControlsButtonH.appendChild(PauseBtnH);
ControlsButtonH.appendChild(PlayBtnH);

const ProgressP_H = ProgressBarH.querySelector("#progress_p_a");
ProgressP_H.id = "progress_p_h";

let PlayTimeH = ProgressP_H.querySelector("#play_position");
let ProgressH = ProgressP_H.querySelector("#progress");
let EndTimeH = ProgressP_H.querySelector("#end_position");
PlayTimeH.id = "playtime_h";
ProgressH.id = "progress_h";
EndTimeH.id = "endtime_h";

const ContorolsSoundH = ProgressBarH.querySelector("#controls_sound");
ContorolsSoundH.id = "controls_sound_h";

let MuteBtnH = ContorolsSoundH.querySelector("#mute");
let UnmuteBtnH = ContorolsSoundH.querySelector("#unmute");
MuteBtnH.id = "mute_h";
UnmuteBtnH.id = "unmute_h";

VideoHElement.addEventListener("mouseover", () => {
  ProgressBarH.style.display = "block";
});

VideoHElement.addEventListener("mouseout", () => {
  ProgressBarH.style.display = "none";
});

ProgressBarH.addEventListener("mouseover", () => {
  ProgressBarH.style.display = "block";
});

ProgressBarH.addEventListener("mouseout", () => {
  ProgressBarH.style.display = "none";
});

buttonM.addEventListener("mouseover", () => {
  ProgressBarH.style.display = "block";
});

buttonM.addEventListener("mouseout", () => {
  ProgressBarH.style.display = "none";
});

buttonN.addEventListener("mouseover", () => {
  ProgressBarH.style.display = "block";
});

buttonN.addEventListener("mouseout", () => {
  ProgressBarH.style.display = "none";
});

back_H_C.addEventListener("mouseover", () => {
  ProgressBarH.style.display = "block";
});

back_H_C.addEventListener("mouseout", () => {
  ProgressBarH.style.display = "none";
});

let progressHtimeout;

function setProgressBarHTimeout() {
  progressHtimeout = setTimeout(() => {
    ProgressBarH.style.display = "none";
  }, 3000);
}

VideoHElement.addEventListener("touchstart", () => {
  ProgressBarH.style.display = "block";
});

VideoHElement.addEventListener("touchend", () => {
  setProgressBarHTimeout();
});

ProgressH.addEventListener("touchstart", () => {
  isTouchingprogressBar = true;
  if (isTouchingprogressBar) {
    clearTimeout(progressHtimeout);
    progressHtimeout = null;
  }
});

ProgressH.addEventListener("touchend", () => {
  if (VideoHElement.paused) {
    ProgressBarH.style.display = "block";
    isTouchingprogressBar = true;
    if (isTouchingprogressBar) {
      clearTimeout(progressHtimeout);
      progressHtimeout = null;
    }
  } else {
    setProgressBarHTimeout();
    isTouchingprogressBar = false;
  }
});

PauseBtnH.addEventListener("touchstart", () => {
  isTouchingprogressBar = true;
  if (isTouchingprogressBar) {
    clearTimeout(progressHtimeout);
    progressHtimeout = null;
  }
});

PlayBtnH.addEventListener("touchstart", () => {
  setProgressBarHTimeout();
  isTouchingprogressBar = false;
});

let playtimerH = null;

const startTimerH = () => {
  playtimerH = setInterval(() => {
    const currentTimeH = VideoHElement.currentTime;
    const durationH = VideoHElement.duration;

    if (!isNaN(currentTimeH) && !isNaN(durationH)) {
      const progressBarHValue = (currentTimeH / durationH) * 100;
      PlayTimeH.textContent = convertTime(currentTimeH);
      ProgressH.value = progressBarHValue;
    }

  }, 100);
  console.log('startTimerH');
};

let isVideoBoxH = true;

if (isVideoBoxH) {
  VideoHElement.addEventListener('loadeddata', () => {
    const maxDurationH = VideoHElement.duration;

    const formattedDurationH = convertTime(maxDurationH);
    EndTimeH.textContent = `${formattedDurationH}`;

    if (ClassC.style.zIndex = "27") {
      startTimerH();
    }

    PauseBtnH.addEventListener('click', () => {
      if (!VideoHElement.paused) {
        VideoHElement.pause();
        stopTimerH();
        PauseBtnH.style.display = 'none';
        PlayBtnH.style.display = 'block';
        console.log('H一時停止をクリックしました');
      }
    });

    PlayBtnH.addEventListener('click', () => {
      if (VideoHElement.paused) {
        startTimerH();
        VideoHElement.play();
        PlayBtnH.style.display = 'none';
        PauseBtnH.style.display = 'block';
        console.log('再生Hアイコンをクリックしました');
      }
    });

    MuteBtnH.addEventListener('click', () => {
      if (VideoHElement.muted) {
        VideoHElement.muted = false;
        MuteBtnH.style.display = 'none';
        UnmuteBtnH.style.display = 'block';
        console.log('Hミュートを解除しました');
      }
    });

    UnmuteBtnH.addEventListener('click', () => {
      if (!VideoHElement.muted) {
        VideoHElement.muted = true;
        UnmuteBtnH.style.display = 'none';
        MuteBtnH.style.display = 'block';
        console.log('Hミュートをクリックしました');
      }
    });

    const stopTimerH = () => {
      VideoHElement.addEventListener("pause", () => {
        clearInterval(playtimerH);
        console.log('stopTimerH一時停止');
      });
    };

    ProgressH.addEventListener('input', () => {
      stopTimerH();
      const seekTimeH = calculateSeekTimeH(ProgressH.value);
      if (!isNaN(seekTimeH) && isFinite(seekTimeH) && seekTimeH >= 0 && seekTimeH <= VideoHElement.duration) {
        VideoHElement.currentTime = seekTimeH;
        console.log('Hプログレスバーを操作しました');
      }
    });

    ProgressH.addEventListener('change', () => {
      startTimerH();
      console.log('Hプログレスバーの操作が完了しました');
    });

    const calculateSeekTimeH = (progressValue) => {
      return (progressValue / 100) * VideoHElement.duration;
    };

    const isVideoVisibleH = true;

    VideoHElement.addEventListener('timeupdate', () => {
      const currentTimeH = VideoHElement.currentTime;

      PlayTimeH.textContent = convertTime(VideoHElement.currentTime);
      EndTimeH.textContent = convertTime(VideoHElement.duration);


      if (currentTimeH >= 21) {
        buttonM.style.display = 'block';
        const clickHandler_m = () => {
          if (isVideoVisibleH) {
            ClassH.style.zIndex = "22";
            VideoHElement.currentTime = 0;
            VideoHElement.pause();
            ProgressBarH.style.zIndex = "-22";
            ProgressBarH.style.display = "none";


            if (VideoHElement.muted) {
              VideoMElement.muted = true;
              MuteBtnM.style.display = "block";
              UnmuteBtnM.style.display = "none";
            } else if (!VideoHElement.muted) {
              VideoMElement.muted = false;
              UnmuteBtnM.style.display = "block";
              MuteBtnM.style.display = "none";
            }

            VideoMElement.play();
            ClassM.style.zIndex = "290";
            ProgressBarM.style.zIndex = "291";

            console.log('buttonMをクリックしました');
          }
        };
        buttonH.addEventListener("click", clickHandler_m);

        buttonH.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_m();
          setTimeout(() => {
            ProgressBarH.style.display = "none";
          }, 3000);
        });
      } else {
        buttonM.style.display = 'none';
      }

      if (currentTimeH >= 24) {
        buttonN.style.display = 'block';
        const clickHandler_n = () => {
          if (isVideoVisibleH) {
            ClassH.style.zIndex = "22";
            VideoHElement.currentTime = 0;
            VideoHElement.pause();
            ProgressBarH.style.zIndex = "-22";
            ProgressBarH.style.display = "none";


            if (VideoHElement.muted) {
              VideoNElement.muted = true;
              MuteBtnN.style.display = "block";
              UnmuteBtnN.style.display = "none";
            } else if (!VideoHElement.muted) {
              VideoNElement.muted = false;
              UnmuteBtnN.style.display = "block";
              MuteBtnN.style.display = "none";
            }

            VideoNElement.play();
            ClassN.style.zIndex = "290";
            ProgressBarN.style.zIndex = "291";

            console.log('buttonNをクリックしました');
          }
        };
        buttonN.addEventListener("click", clickHandler_n);

        buttonN.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_n();
          setTimeout(() => {
            ProgressBarH.style.display = "none";
          }, 3000);
        });
      } else {
        buttonN.style.display = 'none';
      }

      if (currentTimeH >= 33) {
        back_H_C.style.display = 'block';
        const clickHandler_back_h_c = () => {
          if (isVideoVisibleH) {
            ClassH.style.zIndex = "22";
            VideoHElement.currentTime = 0;
            VideoHElement.pause();
            ProgressBarH.style.zIndex = "-22";
            ProgressBarH.style.display = "none";


            if (VideoHElement.muted) {
              VideoCElement.muted = true;
              MuteBtnC.style.display = "block";
              UnmuteBtnC.style.display = "none";
            } else if (!VideoHElement.muted) {
              VideoCElement.muted = false;
              UnmuteBtnC.style.display = "block";
              MuteBtnC.style.display = "none";
            }

            VideoCElement.play();
            ClassC.style.zIndex = "290";
            ProgressBarC.style.zIndex = "291";

            console.log('buttonHをクリックしました');
          }
        };
        back_H_C.addEventListener("click", clickHandler_back_h_c);

        back_H_C.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_back_h_c();
          setTimeout(() => {
            ProgressBarH.style.display = "none";
          }, 3000);
        });
      } else {
        back_H_C.style.display = 'none';
      }
      if (currentTimeH >= 51) {
        PauseBtnH.style.display = "none";
        PlayBtnH.style.display = "block";
        VideoHElement.pause();
      }

      console.log('TimeUpDateH');
    });

    console.log('LoadeddataH');
  });
}

// Insurance I

let ProgressBarI = ProgressBar.cloneNode(true);
ProgressBarI.id = "progress_bar_i";
interactive_Videos.appendChild(ProgressBarI);
ProgressBarI.style.zIndex = "-8";
ProgressBarI.style.display = "none";

const BackGroundBarI = ProgressBarI.querySelector("#background_bar");
BackGroundBarI.id = "background_bar_i";

const ControlsButtonI = ProgressBarI.querySelector("#controls_button");
ControlsButtonI.id = "controls_button_i";

let PauseBtnI = ControlsButtonI.querySelector("#pause");
PauseBtnI.id = "pause_b";
let PlayBtnI = ControlsButtonI.querySelector("#play");
PlayBtnI.id = "play_b";
ControlsButtonI.appendChild(PauseBtnI);
ControlsButtonI.appendChild(PlayBtnI);

const ProgressP_I = ProgressBarI.querySelector("#progress_p_a");
ProgressP_I.id = "progress_p_i";

let PlayTimeI = ProgressP_I.querySelector("#play_position");
let ProgressI = ProgressP_I.querySelector("#progress");
let EndTimeI = ProgressP_I.querySelector("#end_position");
PlayTimeI.id = "playtime_i";
ProgressI.id = "progress_i";
EndTimeI.id = "endtime_i";

const ContorolsSoundI = ProgressBarI.querySelector("#controls_sound");
ContorolsSoundI.id = "controls_sound_i";

let MuteBtnI = ContorolsSoundI.querySelector("#mute");
let UnmuteBtnI = ContorolsSoundI.querySelector("#unmute");
MuteBtnI.id = "mute_i";
UnmuteBtnI.id = "unmute_i";

VideoIElement.addEventListener("mouseover", () => {
  ProgressBarI.style.display = "block";
});

VideoIElement.addEventListener("mouseout", () => {
  ProgressBarI.style.display = "none";
});

ProgressBarI.addEventListener("mouseover", () => {
  ProgressBarI.style.display = "block";
});

ProgressBarI.addEventListener("mouseout", () => {
  ProgressBarI.style.display = "none";
});

buttonO.addEventListener("mouseover", () => {
  ProgressBarI.style.display = "block";
});

buttonO.addEventListener("mouseout", () => {
  ProgressBarI.style.display = "none";
});

buttonP.addEventListener("mouseover", () => {
  ProgressBarI.style.display = "block";
});

buttonP.addEventListener("mouseout", () => {
  ProgressBarI.style.display = "none";
});

back_I_C.addEventListener("mouseover", () => {
  ProgressBarI.style.display = "block";
});

back_I_C.addEventListener("mouseout", () => {
  ProgressBarI.style.display = "none";
});

let progressItimeout;

function setProgressBarITimeout() {
  progressItimeout = setTimeout(() => {
    ProgressBarI.style.display = "none";
  }, 3000);
}

VideoIElement.addEventListener("touchstart", () => {
  ProgressBarI.style.display = "block";
});

VideoIElement.addEventListener("touchend", () => {
  setProgressBarITimeout();
});

ProgressI.addEventListener("touchstart", () => {
  isTouchingprogressBar = true;
  if (isTouchingprogressBar) {
    clearTimeout(progressItimeout);
    progressItimeout = null;
  }
});

ProgressI.addEventListener("touchend", () => {
  if (VideoIElement.paused) {
    ProgressBarI.style.display = "block";
    isTouchingprogressBar = true;
    if (isTouchingprogressBar) {
      clearTimeout(progressItimeout);
      progressItimeout = null;
    }
  } else {
    setProgressBarITimeout();
    isTouchingprogressBar = false;
  }
});

PauseBtnI.addEventListener("touchstart", () => {
  isTouchingprogressBar = true;
  if (isTouchingprogressBar) {
    clearTimeout(progressItimeout);
    progressItimeout = null;
  }
});

PlayBtnI.addEventListener("touchstart", () => {
  setProgressBarITimeout();
  isTouchingprogressBar = false;
});

let playtimerI = null;

const startTimerI = () => {
  playtimerI = setInterval(() => {
    const currentTimeI = VideoIElement.currentTime;
    const durationI = VideoIElement.duration;

    if (!isNaN(currentTimeI) && !isNaN(durationI)) {
      const progressBarIValue = (currentTimeI / durationI) * 100;
      PlayTimeI.textContent = convertTime(currentTimeI);
      ProgressI.value = progressBarIValue;
    }

  }, 100);
  console.log('startTimerI');
};

let isVideoBoxI = true;

if (isVideoBoxI) {
  VideoIElement.addEventListener('loadeddata', () => {
    const maxDurationI = VideoIElement.duration;

    const formattedDurationI = convertTime(maxDurationI);
    EndTimeI.textContent = `${formattedDurationI}`;

    if (ClassC.style.zIndex = "27") {
      startTimerI();
    }

    PauseBtnI.addEventListener('click', () => {
      if (!VideoIElement.paused) {
        VideoIElement.pause();
        stopTimerI();
        PauseBtnI.style.display = 'none';
        PlayBtnI.style.display = 'block';
        console.log('I一時停止をクリックしました');
      }
    });

    PlayBtnI.addEventListener('click', () => {
      if (VideoIElement.paused) {
        startTimerI();
        VideoIElement.play();
        PlayBtnI.style.display = 'none';
        PauseBtnI.style.display = 'block';
        console.log('再生Iアイコンをクリックしました');
      }
    });

    MuteBtnI.addEventListener('click', () => {
      if (VideoIElement.muted) {
        VideoIElement.muted = false;
        MuteBtnI.style.display = 'none';
        UnmuteBtnI.style.display = 'block';
        console.log('Iミュートを解除しました');
      }
    });

    UnmuteBtnI.addEventListener('click', () => {
      if (!VideoIElement.muted) {
        VideoIElement.muted = true;
        UnmuteBtnI.style.display = 'none';
        MuteBtnI.style.display = 'block';
        console.log('Iミュートをクリックしました');
      }
    });

    const stopTimerI = () => {
      VideoIElement.addEventListener("pause", () => {
        clearInterval(playtimerI);
        console.log('stopTimerI');
      });
    };

    ProgressI.addEventListener('input', () => {
      stopTimerI();
      const seekTimeI = calculateSeekTimeI(ProgressI.value);
      if (!isNaN(seekTimeI) && isFinite(seekTimeI) && seekTimeI >= 0 && seekTimeI <= VideoIElement.duration) {
        VideoIElement.currentTime = seekTimeI;
        console.log('Iプログレスバーを操作しました');
      }
    });

    ProgressI.addEventListener('change', () => {
      startTimerI();
      console.log('Iプログレスバーの操作が完了しました');
    });

    const calculateSeekTimeI = (progressValue) => {
      return (progressValue / 100) * VideoIElement.duration;
    };

    const isVideoVisibleI = true;

    VideoIElement.addEventListener('timeupdate', () => {
      const currentTimeI = VideoIElement.currentTime;

      PlayTimeI.textContent = convertTime(VideoIElement.currentTime);
      EndTimeI.textContent = convertTime(VideoIElement.duration);


      if (currentTimeI >= 68) {
        buttonO.style.display = 'block';
        const clickHandler_o = () => {
          if (isVideoVisibleI) {
            ClassI.style.zIndex = "21";
            VideoIElement.currentTime = 0;
            VideoIElement.pause();
            ProgressBarI.style.zIndex = "-21";
            ProgressBarI.style.display = "none";


            if (VideoIElement.muted) {
              VideoOElement.muted = true;
              MuteBtnO.style.display = "block";
              UnmuteBtnO.style.display = "none";
            } else if (!VideoIElement.muted) {
              VideoOElement.muted = false;
              UnmuteBtnO.style.display = "block";
              MuteBtnO.style.display = "none";
            }

            VideoOElement.play();
            ClassO.style.zIndex = "290";
            ProgressBarO.style.zIndex = "291";

            console.log('buttonOをクリックしました');
          }
        };
        buttonO.addEventListener("click", clickHandler_o);

        buttonO.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_o();
          setTimeout(() => {
            ProgressBarI.style.display = "none";
          }, 3000);
        });
      } else {
        buttonO.style.display = 'none';
      }

      if (currentTimeI >= 68) {
        buttonP.style.display = 'block';
        const clickHandler_p = () => {
          if (isVideoVisibleI) {
            ClassI.style.zIndex = "21";
            VideoIElement.currentTime = 0;
            VideoIElement.pause();
            ProgressBarI.style.zIndex = "-21";
            ProgressBarI.style.display = "none";


            if (VideoIElement.muted) {
              VideoPElement.muted = true;
              MuteBtnP.style.display = "block";
              UnmuteBtnP.style.display = "none";
            } else if (!VideoIElement.muted) {
              VideoPElement.muted = false;
              UnmuteBtnP.style.display = "block";
              MuteBtnP.style.display = "none";
            }

            VideoPElement.play();
            ClassP.style.zIndex = "290";
            ProgressBarP.style.zIndex = "291";

            console.log('buttonPをクリックしました');
          }
        };
        buttonP.addEventListener("click", clickHandler_p);

        buttonP.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_p();
          setTimeout(() => {
            ProgressBarI.style.display = "none";
          }, 3000);
        });
      } else {
        buttonP.style.display = 'none';
      }

      if (currentTimeI >= 68) {
        back_I_C.style.display = 'block';
        const clickHandler_back_i_c = () => {
          if (isVideoVisibleI) {
            ClassI.style.zIndex = "21";
            VideoIElement.currentTime = 0;
            VideoIElement.pause();
            ProgressBarI.style.zIndex = "-21";
            ProgressBarI.style.display = "none";


            if (VideoIElement.muted) {
              VideoCElement.muted = true;
              MuteBtnC.style.display = "block";
              UnmuteBtnC.style.display = "none";
            } else if (!VideoIElement.muted) {
              VideoCElement.muted = false;
              UnmuteBtnC.style.display = "block";
              MuteBtnC.style.display = "none";
            }

            VideoCElement.play();
            ClassC.style.zIndex = "290";
            ProgressBarC.style.zIndex = "291";

            console.log('button03をクリックしました');
          }
        };
        back_I_C.addEventListener("click", clickHandler_back_i_c);

        back_I_C.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_back_i_c();
          setTimeout(() => {
            ProgressBarI.style.display = "none";
          }, 3000);
        });
      } else {
        back_I_C.style.display = 'none';
      }
      if (currentTimeI >= 82) {
        PauseBtnI.style.display = "none";
        PlayBtnI.style.display = "block";
        VideoIElement.pause();
      }

      console.log('TimeUpDateI');
    });

    console.log('LoadeddataI');
  });
}

// Insurance J

let ProgressBarJ = ProgressBar.cloneNode(true);
ProgressBarJ.id = "progress_bar_j";
interactive_Videos.appendChild(ProgressBarJ);
ProgressBarJ.style.zIndex = "-9";
ProgressBarJ.style.display = "none";

const BackGroundBarJ = ProgressBarJ.querySelector("#background_bar");
BackGroundBarJ.id = "background_bar_j";

const ControlsButtonJ = ProgressBarJ.querySelector("#controls_button");
ControlsButtonJ.id = "controls_button_j";

let PauseBtnJ = ControlsButtonJ.querySelector("#pause");
PauseBtnJ.id = "pause_j";
let PlayBtnJ = ControlsButtonJ.querySelector("#play");
PlayBtnJ.id = "play_j";
ControlsButtonJ.appendChild(PauseBtnJ);
ControlsButtonJ.appendChild(PlayBtnJ);

const ProgressP_J = ProgressBarJ.querySelector("#progress_p_a");
ProgressP_J.id = "progress_p_e";

let PlayTimeJ = ProgressP_J.querySelector("#play_position");
let ProgressJ = ProgressP_J.querySelector("#progress");
let EndTimeJ = ProgressP_J.querySelector("#end_position");
PlayTimeJ.id = "playtime_j";
ProgressJ.id = "progress_j";
EndTimeJ.id = "endtime_j";

const ContorolsSoundJ = ProgressBarJ.querySelector("#controls_sound");
ContorolsSoundJ.id = "controls_sound_j";

let MuteBtnJ = ContorolsSoundJ.querySelector("#mute");
let UnmuteBtnJ = ContorolsSoundJ.querySelector("#unmute");
MuteBtnJ.id = "mute_j";
UnmuteBtnJ.id = "unmute_j";

VideoJElement.addEventListener("mouseover", () => {
  ProgressBarJ.style.display = "block";
});

VideoJElement.addEventListener("mouseout", () => {
  ProgressBarJ.style.display = "none";
});

ProgressBarJ.addEventListener("mouseover", () => {
  ProgressBarJ.style.display = "block";
});

ProgressBarJ.addEventListener("mouseout", () => {
  ProgressBarJ.style.display = "none";
});

buttonJ_Info.addEventListener("mouseover", () => {
  ProgressBarJ.style.display = "block";
});

buttonJ_Info.addEventListener("mouseout", () => {
  ProgressBarJ.style.display = "none";
});

opening_J_A.addEventListener("mouseover", () => {
  ProgressBarJ.style.display = "block";
});

opening_J_A.addEventListener("mouseout", () => {
  ProgressBarJ.style.display = "none";
});

back_J_D.addEventListener("mouseover", () => {
  ProgressBarJ.style.display = "block";
});

back_J_D.addEventListener("mouseout", () => {
  ProgressBarJ.style.display = "none";
});

let progressJtimeout;

function setProgressBarJTimeout() {
  progressJtimeout = setTimeout(() => {
    ProgressBarJ.style.display = "none";
  }, 3000);
}

VideoJElement.addEventListener("touchstart", () => {
  ProgressBarJ.style.display = "block";
});

VideoJElement.addEventListener("touchend", () => {
  setProgressBarJTimeout();
});

ProgressJ.addEventListener("touchstart", () => {
  isTouchingprogressBar = true;
  if (isTouchingprogressBar) {
    clearTimeout(progressJtimeout);
    progressJtimeout = null;
  }
});

ProgressJ.addEventListener("touchend", () => {
  if (VideoJElement.paused) {
    ProgressBarJ.style.display = "block";
    isTouchingprogressBar = true;
    if (isTouchingprogressBar) {
      clearTimeout(progressJtimeout);
      progressJtimeout = null;
    }
  } else {
    setProgressBarJTimeout();
    isTouchingprogressBar = false;
  }
});

PauseBtnJ.addEventListener("touchstart", () => {
  isTouchingprogressBar = true;
  if (isTouchingprogressBar) {
    clearTimeout(progressJtimeout);
    progressJtimeout = null;
  }
});

PlayBtnJ.addEventListener("touchstart", () => {
  setProgressBarJTimeout();
  isTouchingprogressBar = false;
});

let playtimerJ = null;

const startTimerJ = () => {
  playtimerJ = setInterval(() => {
    const currentTimeJ = VideoJElement.currentTime;
    const durationJ = VideoJElement.duration;

    if (!isNaN(currentTimeJ) && !isNaN(durationJ)) {
      const progressBarJValue = (currentTimeJ / durationJ) * 100;
      PlayTimeJ.textContent = convertTime(currentTimeJ);
      ProgressJ.value = progressBarJValue;
    }

  }, 100);
  console.log('startTimerJ');
};

let isVideoBoxJ = true;

if (isVideoBoxJ) {
  VideoJElement.addEventListener('loadeddata', () => {
    const maxDurationJ = VideoJElement.duration;

    const formattedDurationJ = convertTime(maxDurationJ);
    EndTimeJ.textContent = `${formattedDurationJ}`;

    PauseBtnJ.addEventListener('click', () => {
      if (!VideoJElement.paused) {
        VideoJElement.pause();
        stopTimerJ();
        PauseBtnJ.style.display = 'none';
        PlayBtnJ.style.display = 'block';
        console.log('J一時停止をクリックしました');
      }
    });

    PlayBtnJ.addEventListener('click', () => {
      if (VideoJElement.paused) {
        startTimerJ();
        VideoJElement.play();
        PlayBtnJ.style.display = 'none';
        PauseBtnJ.style.display = 'block';
        console.log('再生Jアイコンをクリックしました');
      }
    });


    MuteBtnJ.addEventListener('click', () => {
      if (VideoJElement.muted) {
        VideoJElement.muted = false;
        MuteBtnJ.style.display = 'none';
        UnmuteBtnJ.style.display = 'block';
        console.log('Jミュートを解除しました');
      }
    });

    UnmuteBtnJ.addEventListener('click', () => {
      if (!VideoJElement.muted) {
        VideoJElement.muted = true;
        UnmuteBtnJ.style.display = 'none';
        MuteBtnJ.style.display = 'block';
        console.log('Jミュートをクリックしました');
      }
    });

    const stopTimerJ = () => {
      VideoJElement.addEventListener("pause", () => {
        clearInterval(playtimerJ);
        console.log('stopTimerJ');
      });
    };

    ProgressJ.addEventListener('input', () => {
      stopTimerJ();
      const seekTimeJ = calculateSeekTimeJ(ProgressJ.value);
      if (!isNaN(seekTimeJ) && isFinite(seekTimeJ) && seekTimeJ >= 0 && seekTimeJ <= VideoJElement.duration) {
        VideoJElement.currentTime = seekTimeJ;
        console.log('Jプログレスバーを操作しました');
      }
    });

    ProgressJ.addEventListener('change', () => {
      startTimerJ();
      console.log('Jプログレスバーの操作が完了しました');
    });

    const calculateSeekTimeJ = (progressValue) => {
      return (progressValue / 100) * VideoJElement.duration;
    };

    const isVideoVisibleJ = true;

    VideoJElement.addEventListener('timeupdate', () => {
      const currentTimeJ = VideoJElement.currentTime;

      PlayTimeJ.textContent = convertTime(VideoJElement.currentTime);
      EndTimeJ.textContent = convertTime(VideoJElement.duration);


      if (currentTimeJ >= 186) {
        buttonJ_Info.style.display = 'block';
        const clickHandler_j_info = () => {
          if (isVideoVisibleJ) {

            VideoJElement.pause();
            PauseBtnJ.style.display = "none";
            PlayBtnJ.style.display = "block";

            console.log('buttonJ_Info');
          }
        };
        buttonJ_Info.addEventListener("click", clickHandler_j_info);

        buttonJ_Info.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_j_info();
          setTimeout(() => {
            ProgressBarJ.style.display = "none";
          }, 3000);
        });
      } else {
        buttonJ_Info.style.display = 'none';
      }

      if (currentTimeJ >= 186) {
        opening_J_A.style.display = 'block';
        const clickHandler_opening_j_a = () => {
          if (isVideoVisibleJ) {
            ClassJ.style.zIndex = "20";
            VideoJElement.currentTime = 0;
            VideoJElement.pause();
            ProgressBarJ.style.zIndex = "-20";
            ProgressBarJ.style.display = "none";


            if (VideoJElement.muted) {
              VideoAElement.muted = true;
              btn_mute.style.display = "block";
              btn_unmute.style.display = "none";
            } else if (!VideoJElement.muted) {
              VideoAElement.muted = false;
              btn_unmute.style.display = "block";
              btn_mute.style.display = "none";
            }

            VideoAElement.play();
            ClassA.style.zIndex = "290";
            ProgressBar.style.zIndex = "291";

            console.log('opening_J_A');
          }
        };
        opening_J_A.addEventListener("click", clickHandler_opening_j_a);

        opening_J_A.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_opening_j_a();
          setTimeout(() => {
            ProgressBarJ.style.display = "none";
          }, 3000);
        });
      } else {
        opening_J_A.style.display = 'none';
      }

      if (currentTimeJ >= 186) {
        back_J_D.style.display = 'block';
        const clickHandler_back_j_d = () => {
          if (isVideoVisibleJ) {
            ClassJ.style.zIndex = "20";
            VideoJElement.currentTime = 0;
            VideoJElement.pause();
            ProgressBarJ.style.zIndex = "-20";
            ProgressBarJ.style.display = "none";


            if (VideoJElement.muted) {
              VideoDElement.muted = true;
              MuteBtnD.style.display = "block";
              UnmuteBtnD.style.display = "none";
            } else if (!VideoJElement.muted) {
              VideoDElement.muted = false;
              UnmuteBtnD.style.display = "block";
              MuteBtnD.style.display = "none";
            }

            VideoDElement.play();
            ClassD.style.zIndex = "290";
            ProgressBarD.style.zIndex = "291";

            console.log('back_J_D');
          }
        };
        back_J_D.addEventListener("click", clickHandler_back_j_d);

        back_J_D.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_back_j_d();
          setTimeout(() => {
            ProgressBarJ.style.display = "none";
          }, 3000);
        });
      } else {
        back_J_D.style.display = 'none';
      }

      if (currentTimeJ >= 202) {
        PauseBtnJ.style.display = "none";
        PauseBtnJ.style.display = "block";
        VideoJElement.pause();
      }

      console.log('TimeUpDateJ');
    });

    console.log('LoadeddataJ');
  });
}

// Insurance K

let ProgressBarK = ProgressBar.cloneNode(true);
ProgressBarK.id = "progress_bar_k";
interactive_Videos.appendChild(ProgressBarK);
ProgressBarK.style.zIndex = "-10";
ProgressBarK.style.display = "none";

const BackGroundBarK = ProgressBarK.querySelector("#background_bar");
BackGroundBarK.id = "background_bar_k";

const ControlsButtonK = ProgressBarK.querySelector("#controls_button");
ControlsButtonK.id = "controls_button_k";

let PauseBtnK = ControlsButtonK.querySelector("#pause");
PauseBtnK.id = "pause_k";
let PlayBtnK = ControlsButtonK.querySelector("#play");
PlayBtnK.id = "play_k";
ControlsButtonK.appendChild(PauseBtnK);
ControlsButtonK.appendChild(PlayBtnK);

const ProgressP_K = ProgressBarK.querySelector("#progress_p_a");
ProgressP_K.id = "progress_p_k";

let PlayTimeK = ProgressP_K.querySelector("#play_position");
let ProgressK = ProgressP_K.querySelector("#progress");
let EndTimeK = ProgressP_K.querySelector("#end_position");
PlayTimeK.id = "playtime_k";
ProgressK.id = "progress_k";
EndTimeK.id = "endtime_k";

const ContorolsSoundK = ProgressBarK.querySelector("#controls_sound");
ContorolsSoundK.id = "controls_sound_k";

let MuteBtnK = ContorolsSoundK.querySelector("#mute");
let UnmuteBtnK = ContorolsSoundK.querySelector("#unmute");
MuteBtnK.id = "mute_k";
UnmuteBtnK.id = "unmute_k";

VideoKElement.addEventListener("mouseover", () => {
  ProgressBarK.style.display = "block";
});

VideoKElement.addEventListener("mouseout", () => {
  ProgressBarK.style.display = "none";
});

ProgressBarK.addEventListener("mouseover", () => {
  ProgressBarK.style.display = "block";
});

ProgressBarK.addEventListener("mouseout", () => {
  ProgressBarK.style.display = "none";
});

buttonK_Info.addEventListener("mouseover", () => {
  ProgressBarK.style.display = "block";
});

buttonK_Info.addEventListener("mouseout", () => {
  ProgressBarK.style.display = "none";
});

opening_K_A.addEventListener("mouseover", () => {
  ProgressBarK.style.display = "block";
});

opening_K_A.addEventListener("mouseout", () => {
  ProgressBarK.style.display = "none";
});

back_K_D.addEventListener("mouseover", () => {
  ProgressBarK.style.display = "block";
});

back_K_D.addEventListener("mouseout", () => {
  ProgressBarK.style.display = "none";
});

let progressKtimeout;

function setProgressBarKTimeout() {
  progressKtimeout = setTimeout(() => {
    ProgressBarK.style.display = "none";
  }, 3000);
}

VideoKElement.addEventListener("touchstart", () => {
  ProgressBarK.style.display = "block";
});

VideoKElement.addEventListener("touchend", () => {
  setProgressBarKTimeout();
});

ProgressK.addEventListener("touchstart", () => {
  isTouchingprogressBar = true;
  if (isTouchingprogressBar) {
    clearTimeout(progressKtimeout);
    progressKtimeout = null;
  }
});

ProgressK.addEventListener("touchend", () => {
  if (VideoKElement.paused) {
    ProgressBarK.style.display = "block";
    isTouchingprogressBar = true;
    if (isTouchingprogressBar) {
      clearTimeout(progressKtimeout);
      progressKtimeout = null;
    }
  } else {
    setProgressBarKTimeout();
    isTouchingprogressBar = false;
  }
});

PauseBtnK.addEventListener("touchstart", () => {
  isTouchingprogressBar = true;
  if (isTouchingprogressBar) {
    clearTimeout(progressKtimeout);
    progressKtimeout = null;
  }
});

PlayBtnK.addEventListener("touchstart", () => {
  setProgressBarKTimeout();
  isTouchingprogressBar = false;
});

let playtimerK = null;

const startTimerK = () => {
  playtimerK = setInterval(() => {
    const currentTimeK = VideoKElement.currentTime;
    const durationK = VideoKElement.duration;

    if (!isNaN(currentTimeK) && !isNaN(durationK)) {
      const progressBarKValue = (currentTimeK / durationK) * 100;
      PlayTimeK.textContent = convertTime(currentTimeK);
      ProgressK.value = progressBarKValue;
    }

  }, 100);
  console.log('startTimerK');
};

let isVideoBoxK = true;

if (isVideoBoxK) {
  VideoKElement.addEventListener('loadeddata', () => {
    const maxDurationK = VideoKElement.duration;

    const formattedDurationK = convertTime(maxDurationK);
    EndTimeK.textContent = `${formattedDurationK}`;

    if (ClassD.style.zIndex = "26") {
      startTimerK();
    }

    PauseBtnK.addEventListener('click', () => {
      if (!VideoKElement.paused) {
        VideoKElement.pause();
        stopTimerK();
        PauseBtnK.style.display = 'none';
        PlayBtnK.style.display = 'block';
        console.log('K一時停止をクリックしました');
      }
    });

    PlayBtnK.addEventListener('click', () => {
      if (VideoKElement.paused) {
        startTimerK();
        VideoKElement.play();
        PlayBtnK.style.display = 'none';
        PauseBtnK.style.display = 'block';
        console.log('再生Kアイコンをクリックしました');
      }
    });


    MuteBtnK.addEventListener('click', () => {
      if (VideoKElement.muted) {
        VideoKElement.muted = false;
        MuteBtnK.style.display = 'none';
        UnmuteBtnK.style.display = 'block';
        console.log('Kミュートを解除しました');
      }
    });

    UnmuteBtnK.addEventListener('click', () => {
      if (!VideoKElement.muted) {
        VideoKElement.muted = true;
        UnmuteBtnK.style.display = 'none';
        MuteBtnK.style.display = 'block';
        console.log('Kミュートをクリックしました');
      }
    });

    const stopTimerK = () => {
      VideoKElement.addEventListener("pause", () => {
        clearInterval(playtimerK);
        console.log('stopTimerK');
      });
    };

    ProgressK.addEventListener('input', () => {
      stopTimerK();
      const seekTimeK = calculateSeekTimeK(ProgressK.value);
      if (!isNaN(seekTimeK) && isFinite(seekTimeK) && seekTimeK >= 0 && seekTimeK <= VideoKElement.duration) {
        VideoKElement.currentTime = seekTimeK;
        console.log('Kプログレスバーを操作しました');
      }
    });

    ProgressK.addEventListener('change', () => {
      startTimerK();
      console.log('Kプログレスバーの操作が完了しました');
    });

    const calculateSeekTimeK = (progressValue) => {
      return (progressValue / 100) * VideoKElement.duration;
    };

    const isVideoVisibleK = true;

    VideoKElement.addEventListener('timeupdate', () => {
      const currentTimeK = VideoKElement.currentTime;

      PlayTimeK.textContent = convertTime(VideoKElement.currentTime);
      EndTimeK.textContent = convertTime(VideoKElement.duration);


      if (currentTimeK >= 152) {
        buttonK_Info.style.display = 'block';
        const clickHandler_k_info = () => {
          if (isVideoVisibleK) {

            VideoKElement.pause();
            PauseBtnK.style.display = "none";
            PlayBtnK.style.display = "block";
            console.log('buttonK_Info');
          }
        };
        buttonK_Info.addEventListener("click", clickHandler_k_info);

        buttonK_Info.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_k_info();
          setTimeout(() => {
            ProgressBarK.style.display = "none";
          }, 3000);
        });
      } else {
        buttonK_Info.style.display = 'none';
      }

      if (currentTimeK >= 152) {
        opening_K_A.style.display = 'block';
        const clickHandler_opening_k_a = () => {
          if (isVideoVisibleK) {
            ClassK.style.zIndex = "19";
            VideoKElement.currentTime = 0;
            VideoKElement.pause();
            ProgressBarK.style.zIndex = "-19";
            ProgressBarK.style.display = "none";


            if (VideoKElement.muted) {
              VideoAElement.muted = true;
              btn_mute.style.display = "block";
              btn_unmute.style.display = "none";
            } else if (!VideoKElement.muted) {
              VideoAElement.muted = false;
              btn_unmute.style.display = "block";
              btn_mute.style.display = "none";
            }

            VideoAElement.play();
            ClassA.style.zIndex = "290";
            ProgressBar.style.zIndex = "291";

            console.log('opening_K_A');
          }
        };
        opening_K_A.addEventListener("click", clickHandler_opening_k_a);

        opening_K_A.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_opening_k_a();
          setTimeout(() => {
            ProgressBarK.style.display = "none";
          }, 3000);
        });
      } else {
        opening_K_A.style.display = 'none';
      }

      if (currentTimeK >= 152) {
        back_K_D.style.display = 'block';
        const clickHandler_back_K_d = () => {
          if (isVideoVisibleK) {
            ClassK.style.zIndex = "19";
            VideoKElement.currentTime = 0;
            VideoKElement.pause();
            ProgressBarK.style.zIndex = "-19";
            ProgressBarK.style.display = "none";


            if (VideoKElement.muted) {
              VideoDElement.muted = true;
              MuteBtnD.style.display = "block";
              UnmuteBtnD.style.display = "none";
            } else if (!VideoKElement.muted) {
              VideoDElement.muted = false;
              UnmuteBtnD.style.display = "block";
              MuteBtnD.style.display = "none";
            }

            VideoDElement.play();
            ClassD.style.zIndex = "290";
            ProgressBarD.style.zIndex = "291";

            console.log('back_K_D');
          }
        };
        back_K_D.addEventListener("click", clickHandler_back_K_d);

        back_K_D.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_back_K_d();
          setTimeout(() => {
            ProgressBarK.style.display = "none";
          }, 3000);
        });
      } else {
        back_K_D.style.display = 'none';
      }

      if (currentTimeK >= 168) {
        PauseBtnK.style.display = "none";
        PlayBtnK.style.display = "block";
        VideoKElement.pause();
      }

      console.log('TimeUpDateK');
    });

    console.log('LoadeddataK');
  });
}

// Insurance L

let ProgressBarL = ProgressBar.cloneNode(true);
ProgressBarL.id = "progress_bar_l";
interactive_Videos.appendChild(ProgressBarL);
ProgressBarL.style.zIndex = "-11";
ProgressBarL.style.display = "none";

const BackGroundBarL = ProgressBarL.querySelector("#background_bar");
BackGroundBarL.id = "background_bar_l";

const ControlsButtonL = ProgressBarL.querySelector("#controls_button");
ControlsButtonL.id = "controls_button_l";

let PauseBtnL = ControlsButtonL.querySelector("#pause");
PauseBtnL.id = "pause_l";
let PlayBtnL = ControlsButtonL.querySelector("#play");
PlayBtnL.id = "play_l";
ControlsButtonL.appendChild(PauseBtnL);
ControlsButtonL.appendChild(PlayBtnL);

const ProgressP_L = ProgressBarL.querySelector("#progress_p_a");
ProgressP_L.id = "progress_p_l";

let PlayTimeL = ProgressP_L.querySelector("#play_position");
let ProgressL = ProgressP_L.querySelector("#progress");
let EndTimeL = ProgressP_L.querySelector("#end_position");
PlayTimeL.id = "playtime_l";
ProgressL.id = "progress_l";
EndTimeL.id = "endtime_l";

const ContorolsSoundL = ProgressBarL.querySelector("#controls_sound");
ContorolsSoundL.id = "controls_sound_l";

let MuteBtnL = ContorolsSoundL.querySelector("#mute");
let UnmuteBtnL = ContorolsSoundL.querySelector("#unmute");
MuteBtnL.id = "mute_l";
UnmuteBtnL.id = "unmute_l";

VideoLElement.addEventListener("mouseover", () => {
  ProgressBarL.style.display = "block";
});

VideoLElement.addEventListener("mouseout", () => {
  ProgressBarL.style.display = "none";
});

ProgressBarL.addEventListener("mouseover", () => {
  ProgressBarL.style.display = "block";
});

ProgressBarL.addEventListener("mouseout", () => {
  ProgressBarL.style.display = "none";
});

buttonL_Info.addEventListener("mouseover", () => {
  ProgressBarL.style.display = "block";
});

buttonL_Info.addEventListener("mouseout", () => {
  ProgressBarL.style.display = "none";
});

opening_L_A.addEventListener("mouseover", () => {
  ProgressBarL.style.display = "block";
});

opening_L_A.addEventListener("mouseout", () => {
  ProgressBarL.style.display = "none";
});

back_L_D.addEventListener("mouseover", () => {
  ProgressBarL.style.display = "block";
});

back_L_D.addEventListener("mouseout", () => {
  ProgressBarL.style.display = "none";
});

let progressLtimeout;

function setProgressBarLTimeout() {
  progressLtimeout = setTimeout(() => {
    ProgressBarL.style.display = "none";
  }, 3000);
}

VideoLElement.addEventListener("touchstart", () => {
  ProgressBarL.style.display = "block";
});

VideoLElement.addEventListener("touchend", () => {
  setProgressBarLTimeout();
});

ProgressL.addEventListener("touchstart", () => {
  isTouchingprogressBar = true;
  if (isTouchingprogressBar) {
    clearTimeout(progressLtimeout);
    progressLtimeout = null;
  }
});

ProgressL.addEventListener("touchend", () => {
  if (VideoLElement.paused) {
    ProgressBarL.style.display = "block";
    isTouchingprogressBar = true;
    if (isTouchingprogressBar) {
      clearTimeout(progressLtimeout);
      progressLtimeout = null;
    }
  } else {
    setProgressBarLTimeout();
    isTouchingprogressBar = false;
  }
});

PauseBtnL.addEventListener("touchstart", () => {
  isTouchingprogressBar = true;
  if (isTouchingprogressBar) {
    clearTimeout(progressLtimeout);
    progressLtimeout = null;
  }
});

PlayBtnL.addEventListener("touchstart", () => {
  setProgressBarLTimeout();
  isTouchingprogressBar = false;
});

let playtimerL = null;

const startTimerL = () => {
  playtimerL = setInterval(() => {
    const currentTimeL = VideoLElement.currentTime;
    const durationL = VideoLElement.duration;

    if (!isNaN(currentTimeL) && !isNaN(durationL)) {
      const progressBarLValue = (currentTimeL / durationL) * 100;
      PlayTimeL.textContent = convertTime(currentTimeL);
      ProgressL.value = progressBarLValue;
    }

  }, 100);
  console.log('startTimerL');
};

let isVideoBoxL = true;

if (isVideoBoxL) {
  VideoLElement.addEventListener('loadeddata', () => {
    const maxDurationL = VideoLElement.duration;

    const formattedDurationL = convertTime(maxDurationL);
    EndTimeL.textContent = `${formattedDurationL}`;

    PauseBtnL.addEventListener('click', () => {
      if (!VideoLElement.paused) {
        VideoLElement.pause();
        stopTimerL();
        PauseBtnL.style.display = 'none';
        PlayBtnL.style.display = 'block';
        console.log('L一時停止をクリックしました');
      }
    });

    PlayBtnL.addEventListener('click', () => {
      if (VideoLElement.paused)
        startTimerL();
      VideoLElement.play();
      PlayBtnL.style.display = 'none';
      PauseBtnL.style.display = 'block';
      console.log('再生Lアイコンをクリックしました');
    });


    MuteBtnL.addEventListener('click', () => {
      if (VideoLElement.muted) {
        VideoLElement.muted = false;
        MuteBtnL.style.display = 'none';
        UnmuteBtnL.style.display = 'block';
        console.log('Lミュートを解除しました');
      }
    });

    UnmuteBtnL.addEventListener('click', () => {
      if (!VideoLElement.muted) {
        VideoLElement.muted = true;
        UnmuteBtnL.style.display = 'none';
        MuteBtnL.style.display = 'block';
        console.log('Lミュートをクリックしました');
      }
    });

    const stopTimerL = () => {
      VideoLElement.addEventListener("pause", () => {
        clearInterval(playtimerL);
        console.log('stopTimerL');
      });
    };

    ProgressL.addEventListener('input', () => {
      stopTimerL();
      const seekTimeL = calculateSeekTimeL(ProgressL.value);
      if (!isNaN(seekTimeL) && isFinite(seekTimeL) && seekTimeL >= 0 && seekTimeL <= VideoLElement.duration) {
        VideoLElement.currentTime = seekTimeL;
        console.log('Lプログレスバーを操作しました');
      }
    });

    ProgressL.addEventListener('change', () => {
      startTimerL();
      console.log('Lプログレスバーの操作が完了しました');
    });

    const calculateSeekTimeL = (progressValue) => {
      return (progressValue / 100) * VideoLElement.duration;
    };

    const isVideoVisibleL = true;

    VideoLElement.addEventListener('timeupdate', () => {
      const currentTimeL = VideoLElement.currentTime;

      PlayTimeL.textContent = convertTime(VideoLElement.currentTime);
      EndTimeL.textContent = convertTime(VideoLElement.duration);


      if (currentTimeL >= 172) {
        buttonL_Info.style.display = 'block';
        const clickHandler_l_info = () => {
          if (isVideoVisibleL) {

            VideoLElement.pause();
            PauseBtnL.style.display = "none";
            PlayBtnL.style.display = "block";
            console.log('buttonL_Info');
          }
        };
        buttonL_Info.addEventListener("click", clickHandler_l_info);

        buttonL_Info.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_l_info();
          setTimeout(() => {
            ProgressBarL.style.display = "none";
          }, 3000);
        });
      } else {
        buttonL_Info.style.display = 'none';
      }

      if (currentTimeL >= 172) {
        opening_L_A.style.display = 'block';
        const clickHandler_opening_l_a = () => {
          if (isVideoVisibleL) {
            ClassL.style.zIndex = "18";
            VideoLElement.currentTime = 0;
            VideoLElement.pause();
            ProgressBarL.style.zIndex = "-18";
            ProgressBarL.style.display = "none";


            if (VideoLElement.muted) {
              VideoAElement.muted = true;
              btn_mute.style.display = "block";
              btn_unmute.style.display = "none";
            } else if (!VideoLElement.muted) {
              VideoAElement.muted = false;
              btn_unmute.style.display = "block";
              btn_mute.style.display = "none";
            }

            VideoAElement.play();
            ClassA.style.zIndex = "290";
            ProgressBar.style.zIndex = "291";

            console.log('opening_L_A');
          }
        };
        opening_L_A.addEventListener("click", clickHandler_opening_l_a);

        opening_L_A.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_opening_l_a();
          setTimeout(() => {
            ProgressBarL.style.display = "none";
          }, 3000);
        });
      } else {
        opening_L_A.style.display = 'none';
      }

      if (currentTimeL >= 172) {
        back_L_D.style.display = 'block';
        const clickHandler_back_l_d = () => {
          if (isVideoVisibleL) {
            ClassL.style.zIndex = "18";
            VideoLElement.currentTime = 0;
            VideoLElement.pause();
            ProgressBarL.style.zIndex = "-18";
            ProgressBarL.style.display = "none";


            if (VideoLElement.muted) {
              VideoDElement.muted = true;
              MuteBtnD.style.display = "block";
              UnmuteBtnD.style.display = "none";
            } else if (!VideoLElement.muted) {
              VideoDElement.muted = false;
              UnmuteBtnD.style.display = "block";
              MuteBtnD.style.display = "none";
            }

            VideoDElement.play();
            ClassD.style.zIndex = "290";
            ProgressBarD.style.zIndex = "291";

            console.log('back_L_D');
          }
        };
        back_L_D.addEventListener("click", clickHandler_back_l_d);

        back_L_D.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_back_l_d();
          setTimeout(() => {
            ProgressBarL.style.display = "none";
          }, 3000);
        });
      } else {
        back_L_D.style.display = 'none';
      }

      if (currentTimeL >= 188) {
        PauseBtnL.style.display = "none";
        PlayBtnL.style.display = "block";
        VideoLElement.pause();
      }

      console.log('TimeUpDateL');
    });

    console.log('LoadeddataL');
  });
}

// Insurance M

let ProgressBarM = ProgressBar.cloneNode(true);
ProgressBarM.id = "progress_bar_m";
interactive_Videos.appendChild(ProgressBarM);
ProgressBarM.style.zIndex = "-12";
ProgressBarM.style.display = "none";

const BackGroundBarM = ProgressBarM.querySelector("#background_bar");
BackGroundBarM.id = "background_bar_m";

const ControlsButtonM = ProgressBarM.querySelector("#controls_button");
ControlsButtonM.id = "controls_button_m";

let PauseBtnM = ControlsButtonM.querySelector("#pause");
PauseBtnM.id = "pause_m";
let PlayBtnM = ControlsButtonM.querySelector("#play");
PlayBtnM.id = "play_m";
ControlsButtonM.appendChild(PauseBtnM);
ControlsButtonM.appendChild(PlayBtnM);

const ProgressP_M = ProgressBarM.querySelector("#progress_p_a");
ProgressP_M.id = "progress_p_m";

let PlayTimeM = ProgressP_M.querySelector("#play_position");
let ProgressM = ProgressP_M.querySelector("#progress");
let EndTimeM = ProgressP_M.querySelector("#end_position");
PlayTimeM.id = "playtime_m";
ProgressM.id = "progress_m";
EndTimeM.id = "endtime_m";

const ContorolsSoundM = ProgressBarM.querySelector("#controls_sound");
ContorolsSoundM.id = "controls_sound_m";

let MuteBtnM = ContorolsSoundM.querySelector("#mute");
let UnmuteBtnM = ContorolsSoundM.querySelector("#unmute");
MuteBtnM.id = "mute_m";
UnmuteBtnM.id = "unmute_m";

VideoMElement.addEventListener("mouseover", () => {
  ProgressBarM.style.display = "block";
});

VideoMElement.addEventListener("mouseout", () => {
  ProgressBarM.style.display = "none";
});

ProgressBarM.addEventListener("mouseover", () => {
  ProgressBarM.style.display = "block";
});

ProgressBarM.addEventListener("mouseout", () => {
  ProgressBarM.style.display = "none";
});

buttonM_Info.addEventListener("mouseover", () => {
  ProgressBarM.style.display = "block";
});

buttonM_Info.addEventListener("mouseout", () => {
  ProgressBarM.style.display = "none";
});

opening_M_A.addEventListener("mouseover", () => {
  ProgressBarM.style.display = "block";
});

opening_M_A.addEventListener("mouseout", () => {
  ProgressBarM.style.display = "none";
});

back_M_H.addEventListener("mouseover", () => {
  ProgressBarM.style.display = "block";
});

back_M_H.addEventListener("mouseout", () => {
  ProgressBarM.style.display = "none";
});

let progressMtimeout;

function setProgressBarMTimeout() {
  progressMtimeout = setTimeout(() => {
    ProgressBarM.style.display = "none";
  }, 3000);
}

VideoMElement.addEventListener("touchstart", () => {
  ProgressBarM.style.display = "block";
});

VideoMElement.addEventListener("touchend", () => {
  setProgressBarMTimeout();
});

ProgressM.addEventListener("touchstart", () => {
  isTouchingprogressBar = true;
  if (isTouchingprogressBar) {
    clearTimeout(progressMtimeout);
    progressMtimeout = null;
  }
});

ProgressM.addEventListener("touchend", () => {
  if (VideoMElement.paused) {
    ProgressBarM.style.display = "block";
    isTouchingprogressBar = true;
    if (isTouchingprogressBar) {
      clearTimeout(progressMtimeout);
      progressMtimeout = null;
    }
  } else {
    setProgressBarMTimeout();
    isTouchingprogressBar = false;
  }
});

PauseBtnM.addEventListener("touchstart", () => {
  isTouchingprogressBar = true;
  if (isTouchingprogressBar) {
    clearTimeout(progressMtimeout);
    progressMtimeout = null;
  }
});

PlayBtnM.addEventListener("touchstart", () => {
  setProgressBarMTimeout();
  isTouchingprogressBar = false;
});

let playtimerM = null;

const startTimerM = () => {
  playtimerM = setInterval(() => {
    const currentTimeM = VideoMElement.currentTime;
    const durationM = VideoMElement.duration;

    if (!isNaN(currentTimeM) && !isNaN(durationM)) {
      const progressBarMValue = (currentTimeM / durationM) * 100;
      PlayTimeM.textContent = convertTime(currentTimeM);
      ProgressM.value = progressBarMValue;
    }

  }, 100);
  console.log('startTimerM');
};

let isVideoBoxM = true;

if (isVideoBoxM) {
  VideoMElement.addEventListener('loadeddata', () => {
    const maxDurationM = VideoMElement.duration;

    const formattedDurationM = convertTime(maxDurationM);
    EndTimeM.textContent = `${formattedDurationM}`;

    if (ClassH.style.zIndex = "22") {
      startTimerM();
    }

    PauseBtnM.addEventListener('click', () => {
      if (!VideoMElement.paused) {
        VideoMElement.pause();
        stopTimerM();
        PauseBtnM.style.display = 'none';
        PlayBtnM.style.display = 'block';
        console.log('M一時停止をクリックしました');
      }
    });

    PlayBtnM.addEventListener('click', () => {
      if (VideoMElement.paused) {
        startTimerM();
        VideoMElement.play();
        PlayBtnM.style.display = 'none';
        PauseBtnM.style.display = 'block';
        console.log('再生Mアイコンをクリックしました');
      }
    });


    MuteBtnM.addEventListener('click', () => {
      if (VideoMElement.muted) {
        VideoMElement.muted = false;
        MuteBtnM.style.display = 'none';
        UnmuteBtnM.style.display = 'block';
        console.log('Mミュートを解除しました');
      }
    });

    UnmuteBtnM.addEventListener('click', () => {
      if (!VideoMElement.muted) {
        VideoMElement.muted = true;
        UnmuteBtnM.style.display = 'none';
        MuteBtnM.style.display = 'block';
        console.log('Mミュートをクリックしました');
      }
    });

    const stopTimerM = () => {
      VideoMElement.addEventListener("pause", () => {
        clearInterval(playtimerM);
        console.log('stopTimerM');
      });
    };

    ProgressM.addEventListener('input', () => {
      stopTimerM();
      const seekTimeM = calculateSeekTimeM(ProgressM.value);
      if (!isNaN(seekTimeM) && isFinite(seekTimeM) && seekTimeM >= 0 && seekTimeM <= VideoMElement.duration) {
        VideoMElement.currentTime = seekTimeM;
        console.log('Mプログレスバーを操作しました');
      }
    });

    ProgressM.addEventListener('change', () => {
      startTimerM();
      console.log('Mプログレスバーの操作が完了しました');
    });

    const calculateSeekTimeM = (progressValue) => {
      return (progressValue / 100) * VideoMElement.duration;
    };

    const isVideoVisibleM = true;

    VideoMElement.addEventListener('timeupdate', () => {
      const currentTimeM = VideoMElement.currentTime;

      PlayTimeM.textContent = convertTime(VideoMElement.currentTime);
      EndTimeM.textContent = convertTime(VideoMElement.duration);


      if (currentTimeM >= 267) {
        buttonM_Info.style.display = 'block';
        const clickHandler_m_info = () => {
          if (isVideoVisibleM) {

            VideoMElement.pause();
            PauseBtnM.style.display = "none";
            PlayBtnM.style.display = "block";
            console.log('buttonM_Info');
          }
        };
        buttonM_Info.addEventListener("click", clickHandler_m_info);

        buttonM_Info.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_m_info();
          setTimeout(() => {
            ProgressBarM.style.display = "none";
          }, 3000);
        });
      } else {
        buttonM_Info.style.display = 'none';
      }

      if (currentTimeM >= 267) {
        opening_M_A.style.display = 'block';
        const clickHandler_opening_m_a = () => {
          if (isVideoVisibleM) {
            ClassM.style.zIndex = "17";
            VideoMElement.currentTime = 0;
            VideoMElement.pause();
            ProgressBarM.style.zIndex = "-17";
            ProgressBarM.style.display = "none";


            if (VideoMElement.muted) {
              VideoAElement.muted = true;
              btn_mute.style.display = "block";
              btn_unmute.style.display = "none";
            } else if (!VideoMElement.muted) {
              VideoAElement.muted = false;
              btn_unmute.style.display = "block";
              btn_mute.style.display = "none";
            }

            VideoAElement.play();
            ClassA.style.zIndex = "290";
            ProgressBar.style.zIndex = "291";

            console.log('opening_M_A');
          }
        };
        opening_M_A.addEventListener("click", clickHandler_opening_m_a);

        opening_M_A.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_opening_m_a();
          setTimeout(() => {
            ProgressBarM.style.display = "none";
          }, 3000);
        });
      } else {
        opening_M_A.style.display = 'none';
      }

      if (currentTimeM >= 267) {
        back_M_H.style.display = 'block';
        const clickHandler_back_m_h = () => {
          if (isVideoVisibleM) {
            ClassM.style.zIndex = "17";
            VideoMElement.currentTime = 0;
            VideoMElement.pause();
            ProgressBarM.style.zIndex = "-17";
            ProgressBarM.style.display = "none";


            if (VideoMElement.muted) {
              VideoHElement.muted = true;
              MuteBtnH.style.display = "block";
              UnmuteBtnH.style.display = "none";
            } else if (!VideoMElement.muted) {
              VideoHElement.muted = false;
              UnmuteBtnH.style.display = "block";
              MuteBtnH.style.display = "none";
            }

            VideoHElement.play();
            ClassH.style.zIndex = "290";
            ProgressBarH.style.zIndex = "291";

            console.log('back_M_H');
          }
        };
        back_M_H.addEventListener("click", clickHandler_back_m_h);

        back_M_H.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_back_m_h();
          setTimeout(() => {
            ProgressBarM.style.display = "none";
          }, 3000);
        });
      } else {
        back_M_H.style.display = 'none';
      }

      if (currentTimeM >= 283) {
        PauseBtnM.style.display = "none";
        PlayBtnM.style.display = "block";
        VideoMElement.pause();
      }

      console.log('TimeUpDateM');
    });

    console.log('LoadeddataM');
  });
}

// Insurance N

let ProgressBarN = ProgressBar.cloneNode(true);
ProgressBarN.id = "progress_bar_n";
interactive_Videos.appendChild(ProgressBarN);
ProgressBarN.style.zIndex = "-13";
ProgressBarN.style.display = "none";

const BackGroundBarN = ProgressBarN.querySelector("#background_bar");
BackGroundBarN.id = "background_bar_n";

const ControlsButtonN = ProgressBarN.querySelector("#controls_button");
ControlsButtonN.id = "controls_button_n";

let PauseBtnN = ControlsButtonN.querySelector("#pause");
PauseBtnN.id = "pause_n";
let PlayBtnN = ControlsButtonN.querySelector("#play");
PlayBtnN.id = "play_n";
ControlsButtonN.appendChild(PauseBtnN);
ControlsButtonN.appendChild(PlayBtnN);

const ProgressP_N = ProgressBarN.querySelector("#progress_p_a");
ProgressP_N.id = "progress_p_n";

let PlayTimeN = ProgressP_N.querySelector("#play_position");
let ProgressN = ProgressP_N.querySelector("#progress");
let EndTimeN = ProgressP_N.querySelector("#end_position");
PlayTimeN.id = "playtime_n";
ProgressN.id = "progress_n";
EndTimeN.id = "endtime_n";

const ContorolsSoundN = ProgressBarN.querySelector("#controls_sound");
ContorolsSoundN.id = "controls_sound_n";

let MuteBtnN = ContorolsSoundN.querySelector("#mute");
let UnmuteBtnN = ContorolsSoundN.querySelector("#unmute");
MuteBtnN.id = "mute_n";
UnmuteBtnN.id = "unmute_n";

VideoNElement.addEventListener("mouseover", () => {
  ProgressBarN.style.display = "block";
});

VideoNElement.addEventListener("mouseout", () => {
  ProgressBarN.style.display = "none";
});

ProgressBarN.addEventListener("mouseover", () => {
  ProgressBarN.style.display = "block";
});

ProgressBarN.addEventListener("mouseout", () => {
  ProgressBarN.style.display = "none";
});

buttonN_Info.addEventListener("mouseover", () => {
  ProgressBarN.style.display = "block";
});

buttonN_Info.addEventListener("mouseout", () => {
  ProgressBarN.style.display = "none";
});

opening_N_A.addEventListener("mouseover", () => {
  ProgressBarN.style.display = "block";
});

opening_N_A.addEventListener("mouseout", () => {
  ProgressBarN.style.display = "none";
});

back_N_H.addEventListener("mouseover", () => {
  ProgressBarN.style.display = "block";
});

back_N_H.addEventListener("mouseout", () => {
  ProgressBarN.style.display = "none";
});

let progressNtimeout;

function setProgressBarNTimeout() {
  progressNtimeout = setTimeout(() => {
    ProgressBarN.style.display = "none";
  }, 3000);
}

VideoNElement.addEventListener("touchstart", () => {
  ProgressBarN.style.display = "block";
});

VideoNElement.addEventListener("touchend", () => {
  setProgressBarNTimeout();
});

ProgressN.addEventListener("touchstart", () => {
  isTouchingprogressBar = true;
  if (isTouchingprogressBar) {
    clearTimeout(progressNtimeout);
    progressNtimeout = null;
  }
});

ProgressN.addEventListener("touchend", () => {
  if (VideoNElement.paused) {
    ProgressBarN.style.display = "block";
    isTouchingprogressBar = true;
    if (isTouchingprogressBar) {
      clearTimeout(progressNtimeout);
      progressNtimeout = null;
    }
  } else {
    setProgressBarNTimeout();
    isTouchingprogressBar = false;
  }
});

PauseBtnN.addEventListener("touchstart", () => {
  isTouchingprogressBar = true;
  if (isTouchingprogressBar) {
    clearTimeout(progressNtimeout);
    progressNtimeout = null;
  }
});

PlayBtnN.addEventListener("touchstart", () => {
  setProgressBarNTimeout();
  isTouchingprogressBar = false;
});

let playtimerN = null;

const startTimerN = () => {
  playtimerN = setInterval(() => {
    const currentTimeN = VideoNElement.currentTime;
    const durationN = VideoNElement.duration;

    if (!isNaN(currentTimeN) && !isNaN(durationN)) {
      const progressBarNValue = (currentTimeN / durationN) * 100;
      PlayTimeN.textContent = convertTime(currentTimeN);
      ProgressN.value = progressBarNValue;
    }

  }, 100);
  console.log('startTimerN');
};

let isVideoBoxN = true;

if (isVideoBoxN) {
  VideoNElement.addEventListener('loadeddata', () => {
    const maxDurationN = VideoNElement.duration;

    const formattedDurationN = convertTime(maxDurationN);
    EndTimeN.textContent = `${formattedDurationN}`;

    if (ClassH.style.zIndex = "22") {
      startTimerN();
    }

    PauseBtnN.addEventListener('click', () => {
      if (!VideoNElement.paused) {
        VideoNElement.pause();
        stopTimerN();
        PauseBtnN.style.display = 'none';
        PlayBtnN.style.display = 'block';
        console.log('N一時停止をクリックしました');
      }
    });

    PlayBtnN.addEventListener('click', () => {
      if (VideoNElement.paused) {
        startTimerN();
        VideoNElement.play();
        PlayBtnN.style.display = 'none';
        PauseBtnN.style.display = 'block';
        console.log('再生Nアイコンをクリックしました');
      }
    });


    MuteBtnN.addEventListener('click', () => {
      if (VideoNElement.muted) {
        VideoNElement.muted = false;
        MuteBtnN.style.display = 'none';
        UnmuteBtnN.style.display = 'block';
        console.log('Nミュートを解除しました');
      }
    });

    UnmuteBtnN.addEventListener('click', () => {
      if (!VideoNElement.muted) {
        VideoNElement.muted = true;
        UnmuteBtnN.style.display = 'none';
        MuteBtnN.style.display = 'block';
        console.log('Nミュートをクリックしました');
      }
    });

    const stopTimerN = () => {
      VideoNElement.addEventListener("pause", () => {
        clearInterval(playtimerN);
        console.log('stopTimerN');
      });
    };

    ProgressN.addEventListener('input', () => {
      stopTimerN();
      const seekTimeN = calculateSeekTimeN(ProgressN.value);
      if (!isNaN(seekTimeN) && isFinite(seekTimeN) && seekTimeN >= 0 && seekTimeN <= VideoNElement.duration) {
        VideoNElement.currentTime = seekTimeN;
        console.log('Nプログレスバーを操作しました');
      }
    });

    ProgressN.addEventListener('change', () => {
      startTimerN();
      console.log('Nプログレスバーの操作が完了しました');
    });

    const calculateSeekTimeN = (progressValue) => {
      return (progressValue / 100) * VideoNElement.duration;
    };

    const isVideoVisibleN = true;

    VideoNElement.addEventListener('timeupdate', () => {
      const currentTimeN = VideoNElement.currentTime;

      PlayTimeN.textContent = convertTime(VideoNElement.currentTime);
      EndTimeN.textContent = convertTime(VideoNElement.duration);


      if (currentTimeN >= 278) {
        buttonN_Info.style.display = 'block';
        const clickHandler_n_info = () => {
          if (isVideoVisibleN) {

            VideoNElement.pause();
            PauseBtnN.style.display = "none";
            PlayBtnN.style.display = "block";
            console.log('buttonN_Info');
          }
        };
        buttonN_Info.addEventListener("click", clickHandler_n_info);

        buttonN_Info.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_n_info();
          setTimeout(() => {
            ProgressBarN.style.display = "none";
          }, 3000);
        });
      } else {
        buttonN_Info.style.display = 'none';
      }

      if (currentTimeN >= 278) {
        opening_N_A.style.display = 'block';
        const clickHandler_opening_n_a = () => {
          if (isVideoVisibleN) {
            ClassN.style.zIndex = "16";
            VideoNElement.currentTime = 0;
            VideoNElement.pause();
            ProgressBarN.style.zIndex = "-16";
            ProgressBarN.style.display = "none";


            if (VideoNElement.muted) {
              VideoAElement.muted = true;
              btn_mute.style.display = "block";
              btn_unmute.style.display = "none";
            } else if (!VideoNElement.muted) {
              VideoAElement.muted = false;
              btn_unmute.style.display = "block";
              btn_mute.style.display = "none";
            }

            VideoAElement.play();
            ClassA.style.zIndex = "290";
            ProgressBar.style.zIndex = "291";

            console.log('opening_N_A');
          }
        };
        opening_N_A.addEventListener("click", clickHandler_opening_n_a);

        opening_N_A.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_opening_n_a();
          setTimeout(() => {
            ProgressBarN.style.display = "none";
          }, 3000);
        });
      } else {
        opening_N_A.style.display = 'none';
      }

      if (currentTimeN >= 278) {
        back_N_H.style.display = 'block';
        const clickHandler_back_n_h = () => {
          if (isVideoVisibleN) {
            ClassN.style.zIndex = "16";
            VideoNElement.currentTime = 0;
            VideoNElement.pause();
            ProgressBarN.style.zIndex = "-16";
            ProgressBarN.style.display = "none";


            if (VideoNElement.muted) {
              VideoHElement.muted = true;
              MuteBtnH.style.display = "block";
              UnmuteBtnH.style.display = "none";
            } else if (!VideoNElement.muted) {
              VideoHElement.muted = false;
              UnmuteBtnH.style.display = "block";
              MuteBtnH.style.display = "none";
            }

            VideoHElement.play();
            ClassH.style.zIndex = "290";
            ProgressBarH.style.zIndex = "291";

            console.log('back_N_H');
          }
        };
        back_N_H.addEventListener("click", clickHandler_back_n_h);

        back_N_H.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_back_n_h();
          setTimeout(() => {
            ProgressBarN.style.display = "none";
          }, 3000);
        });
      } else {
        back_N_H.style.display = 'none';
      }

      if (currentTimeN >= 294) {
        PauseBtnN.style.display = "none";
        PlayBtnN.style.display = "block";
        VideoNElement.pause();
      }

      console.log('TimeUpDateN');
    });

    console.log('LoadeddataN');
  });
}

// Insurance O

let ProgressBarO = ProgressBar.cloneNode(true);
ProgressBarO.id = "progress_bar_o";
interactive_Videos.appendChild(ProgressBarO);
ProgressBarO.style.zIndex = "-14";
ProgressBarO.style.display = "none";

const BackGroundBarO = ProgressBarO.querySelector("#background_bar");
BackGroundBarO.id = "background_bar_o";

const ControlsButtonO = ProgressBarO.querySelector("#controls_button");
ControlsButtonO.id = "controls_button_o";

let PauseBtnO = ControlsButtonO.querySelector("#pause");
PauseBtnO.id = "pause_o";
let PlayBtnO = ControlsButtonO.querySelector("#play");
PlayBtnO.id = "play_o";
ControlsButtonO.appendChild(PauseBtnO);
ControlsButtonO.appendChild(PlayBtnO);

const ProgressP_O = ProgressBarO.querySelector("#progress_p_a");
ProgressP_O.id = "progress_p_o";

let PlayTimeO = ProgressP_O.querySelector("#play_position");
let ProgressO = ProgressP_O.querySelector("#progress");
let EndTimeO = ProgressP_O.querySelector("#end_position");
PlayTimeO.id = "playtime_o";
ProgressO.id = "progress_o";
EndTimeO.id = "endtime_o";

const ContorolsSoundO = ProgressBarO.querySelector("#controls_sound");
ContorolsSoundO.id = "controls_sound_o";

let MuteBtnO = ContorolsSoundO.querySelector("#mute");
let UnmuteBtnO = ContorolsSoundO.querySelector("#unmute");
MuteBtnO.id = "mute_o";
UnmuteBtnO.id = "unmute_o";

VideoOElement.addEventListener("mouseover", () => {
  ProgressBarO.style.display = "block";
});

VideoOElement.addEventListener("mouseout", () => {
  ProgressBarO.style.display = "none";
});

ProgressBarO.addEventListener("mouseover", () => {
  ProgressBarO.style.display = "block";
});

ProgressBarO.addEventListener("mouseout", () => {
  ProgressBarO.style.display = "none";
});

buttonO_Info.addEventListener("mouseover", () => {
  ProgressBarO.style.display = "block";
});

buttonO_Info.addEventListener("mouseout", () => {
  ProgressBarO.style.display = "none";
});

opening_O_A.addEventListener("mouseover", () => {
  ProgressBarO.style.display = "block";
});

opening_O_A.addEventListener("mouseout", () => {
  ProgressBarO.style.display = "none";
});

back_O_I.addEventListener("mouseover", () => {
  ProgressBarO.style.display = "block";
});

back_O_I.addEventListener("mouseout", () => {
  ProgressBarO.style.display = "none";
});

let progressOtimeout;

function setProgressBarOTimeout() {
  progressOtimeout = setTimeout(() => {
    ProgressBarO.style.display = "none";
  }, 3000);
}

VideoOElement.addEventListener("touchstart", () => {
  ProgressBarO.style.display = "block";
});

VideoOElement.addEventListener("touchend", () => {
  setProgressBarOTimeout();
});

ProgressO.addEventListener("touchstart", () => {
  isTouchingprogressBar = true;
  if (isTouchingprogressBar) {
    clearTimeout(progressOtimeout);
    progressOtimeout = null;
  }
});

ProgressO.addEventListener("touchend", () => {
  if (VideoOElement.paused) {
    ProgressBarO.style.display = "block";
    isTouchingprogressBar = true;
    if (isTouchingprogressBar) {
      clearTimeout(progressOtimeout);
      progressOtimeout = null;
    }
  } else {
    setProgressBarOTimeout();
    isTouchingprogressBar = false;
  }
});

PauseBtnO.addEventListener("touchstart", () => {
  isTouchingprogressBar = true;
  if (isTouchingprogressBar) {
    clearTimeout(progressOtimeout);
    progressOtimeout = null;
  }
});

PlayBtnO.addEventListener("touchstart", () => {
  setProgressBarOTimeout();
  isTouchingprogressBar = false;
});

let playtimerO = null;

const startTimerO = () => {
  playtimerO = setInterval(() => {
    const currentTimeO = VideoOElement.currentTime;
    const durationO = VideoOElement.duration;

    if (!isNaN(currentTimeO) && !isNaN(durationO)) {
      const progressBarOValue = (currentTimeO / durationO) * 100;
      PlayTimeO.textContent = convertTime(currentTimeO);
      ProgressO.value = progressBarOValue;
    }

  }, 100);
  console.log('startTimerO');
};

let isVideoBoxO = true;

if (isVideoBoxO) {
  VideoOElement.addEventListener('loadeddata', () => {
    const maxDurationO = VideoOElement.duration;

    const formattedDurationO = convertTime(maxDurationO);
    EndTimeO.textContent = `${formattedDurationO}`;

    if (ClassI.style.zIndex = "21") {
      startTimerO();
    }

    PauseBtnO.addEventListener('click', () => {
      if (!VideoOElement.paused) {
        VideoOElement.pause();
        stopTimerO();
        PauseBtnO.style.display = 'none';
        PlayBtnO.style.display = 'block';
        console.log('O一時停止をクリックしました');
      }
    });

    PlayBtnO.addEventListener('click', () => {
      if (VideoOElement.paused) {
        startTimerO();
        VideoOElement.play();
        PlayBtnO.style.display = 'none';
        PauseBtnO.style.display = 'block';
        console.log('再生Oアイコンをクリックしました');
      }
    });


    MuteBtnO.addEventListener('click', () => {
      if (VideoOElement.muted) {
        VideoOElement.muted = false;
        MuteBtnO.style.display = 'none';
        UnmuteBtnO.style.display = 'block';
        console.log('Oミュートを解除しました');
      }
    });

    UnmuteBtnO.addEventListener('click', () => {
      if (!VideoOElement.muted) {
        VideoOElement.muted = true;
        UnmuteBtnO.style.display = 'none';
        MuteBtnO.style.display = 'block';
        console.log('Oミュートをクリックしました');
      }
    });

    const stopTimerO = () => {
      VideoOElement.addEventListener("pause", () => {
        clearInterval(playtimerO);
        console.log('stopTimerO');
      });
    };

    ProgressO.addEventListener('input', () => {
      stopTimerO();
      const seekTimeO = calculateSeekTimeO(ProgressO.value);
      if (!isNaN(seekTimeO) && isFinite(seekTimeO) && seekTimeO >= 0 && seekTimeO <= VideoOElement.duration) {
        VideoOElement.currentTime = seekTimeO;
        console.log('Oプログレスバーを操作しました');
      }
    });

    ProgressO.addEventListener('change', () => {
      startTimerO();
      console.log('Oプログレスバーの操作が完了しました');
    });

    const calculateSeekTimeO = (progressValue) => {
      return (progressValue / 100) * VideoOElement.duration;
    };

    const isVideoVisibleO = true;

    VideoOElement.addEventListener('timeupdate', () => {
      const currentTimeO = VideoOElement.currentTime;

      PlayTimeO.textContent = convertTime(VideoOElement.currentTime);
      EndTimeO.textContent = convertTime(VideoOElement.duration);


      if (currentTimeO >= 146) {
        buttonO_Info.style.display = 'block';
        const clickHandler_o_info = () => {
          if (isVideoVisibleO) {

            VideoOElement.pause();
            PauseBtnO.style.display = "none";
            PlayBtnO.style.display = "block";
            console.log('buttonO_Info');
          }
        };
        buttonO_Info.addEventListener("click", clickHandler_o_info);

        buttonO_Info.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_o_info();
          setTimeout(() => {
            ProgressBarO.style.display = "none";
          }, 3000);
        });
      } else {
        buttonO_Info.style.display = 'none';
      }

      if (currentTimeO >= 146) {
        opening_O_A.style.display = 'block';
        const clickHandler_opening_o_a = () => {
          if (isVideoVisibleO) {
            ClassO.style.zIndex = "15";
            VideoOElement.currentTime = 0;
            VideoOElement.pause();
            ProgressBarO.style.zIndex = "-15";
            ProgressBarO.style.display = "none";


            if (VideoOElement.muted) {
              VideoAElement.muted = true;
              btn_mute.style.display = "block";
              btn_unmute.style.display = "none";
            } else if (!VideoOElement.muted) {
              VideoAElement.muted = false;
              btn_unmute.style.display = "block";
              btn_mute.style.display = "none";
            }

            VideoAElement.play();
            ClassA.style.zIndex = "290";
            ProgressBar.style.zIndex = "291";

            console.log('opening_O_A');
          }
        };
        opening_O_A.addEventListener("click", clickHandler_opening_o_a);

        opening_O_A.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_opening_o_a();
          setTimeout(() => {
            ProgressBarO.style.display = "none";
          }, 3000);
        });
      } else {
        opening_O_A.style.display = 'none';
      }

      if (currentTimeO >= 146) {
        back_O_I.style.display = 'block';
        const clickHandler_back_o_i = () => {
          if (isVideoVisibleO) {
            ClassO.style.zIndex = "15";
            VideoOElement.currentTime = 0;
            VideoOElement.pause();
            ProgressBarO.style.zIndex = "-15";
            ProgressBarO.style.display = "none";


            if (VideoOElement.muted) {
              VideoIElement.muted = true;
              MuteBtnI.style.display = "block";
              UnmuteBtnI.style.display = "none";
            } else if (!VideoOElement.muted) {
              VideoIElement.muted = false;
              UnmuteBtnI.style.display = "block";
              MuteBtnI.style.display = "none";
            }

            VideoIElement.play();
            ClassI.style.zIndex = "290";
            ProgressBarI.style.zIndex = "291";

            console.log('back_O_I');
          }
        };
        back_O_I.addEventListener("click", clickHandler_back_o_i);

        back_O_I.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_back_o_i();
          setTimeout(() => {
            ProgressBarO.style.display = "none";
          }, 3000);
        });
      } else {
        back_O_I.style.display = 'none';
      }

      if (currentTimeO >= 162) {
        PauseBtnO.style.display = "none";
        PlayBtnO.style.display = "block";
        VideoOElement.pause();
      }

      console.log('TimeUpDateO');
    });

    console.log('LoadeddataO');
  });
}

// Insurance P

let ProgressBarP = ProgressBar.cloneNode(true);
ProgressBarP.id = "progress_bar_p";
interactive_Videos.appendChild(ProgressBarP);
ProgressBarP.style.zIndex = "-15";
ProgressBarP.style.display = "none";

const BackGroundBarP = ProgressBarP.querySelector("#background_bar");
BackGroundBarP.id = "background_bar_p";

const ControlsButtonP = ProgressBarP.querySelector("#controls_button");
ControlsButtonP.id = "controls_button_p";

let PauseBtnP = ControlsButtonP.querySelector("#pause");
PauseBtnP.id = "pause_p";
let PlayBtnP = ControlsButtonP.querySelector("#play");
PlayBtnP.id = "play_p";
ControlsButtonP.appendChild(PauseBtnP);
ControlsButtonP.appendChild(PlayBtnP);

const ProgressP_P = ProgressBarP.querySelector("#progress_p_a");
ProgressP_P.id = "progress_p_p";

let PlayTimeP = ProgressP_P.querySelector("#play_position");
let ProgressP = ProgressP_P.querySelector("#progress");
let EndTimeP = ProgressP_P.querySelector("#end_position");
PlayTimeP.id = "playtime_p";
ProgressP.id = "progress_p";
EndTimeP.id = "endtime_p";

const ContorolsSoundP = ProgressBarP.querySelector("#controls_sound");
ContorolsSoundP.id = "controls_sound_p";

let MuteBtnP = ContorolsSoundP.querySelector("#mute");
let UnmuteBtnP = ContorolsSoundP.querySelector("#unmute");
MuteBtnP.id = "mute_p";
UnmuteBtnP.id = "unmute_p";

VideoPElement.addEventListener("mouseover", () => {
  ProgressBarP.style.display = "block";
});

VideoPElement.addEventListener("mouseout", () => {
  ProgressBarP.style.display = "none";
});

ProgressBarP.addEventListener("mouseover", () => {
  ProgressBarP.style.display = "block";
});

ProgressBarP.addEventListener("mouseout", () => {
  ProgressBarP.style.display = "none";
});

buttonP_Info.addEventListener("mouseover", () => {
  ProgressBarP.style.display = "block";
});

buttonP_Info.addEventListener("mouseout", () => {
  ProgressBarP.style.display = "none";
});

opening_P_A.addEventListener("mouseover", () => {
  ProgressBarP.style.display = "block";
});

opening_P_A.addEventListener("mouseout", () => {
  ProgressBarP.style.display = "none";
});

back_P_I.addEventListener("mouseover", () => {
  ProgressBarP.style.display = "block";
});

back_P_I.addEventListener("mouseout", () => {
  ProgressBarP.style.display = "none";
});

let progressPtimeout;

function setProgressBarPTimeout() {
  progressPtimeout = setTimeout(() => {
    ProgressBarP.style.display = "none";
  }, 3000);
}

VideoPElement.addEventListener("touchstart", () => {
  ProgressBarP.style.display = "block";
});

VideoPElement.addEventListener("touchend", () => {
  setProgressBarPTimeout();
});

ProgressP.addEventListener("touchstart", () => {
  isTouchingprogressBar = true;
  if (isTouchingprogressBar) {
    clearTimeout(progressPtimeout);
    progressPtimeout = null;
  }
});

ProgressP.addEventListener("touchend", () => {
  if (VideoPElement.paused) {
    ProgressBarP.style.display = "block";
    isTouchingprogressBar = true;
    if (isTouchingprogressBar) {
      clearTimeout(progressPtimeout);
      progressPtimeout = null;
    }
  } else {
    setProgressBarPTimeout();
    isTouchingprogressBar = false;
  }
});

PauseBtnP.addEventListener("touchstart", () => {
  isTouchingprogressBar = true;
  if (isTouchingprogressBar) {
    clearTimeout(progressPtimeout);
    progressPtimeout = null;
  }
});

PlayBtnP.addEventListener("touchstart", () => {
  setProgressBarPTimeout();
  isTouchingprogressBar = false;
});

let playtimerP = null;

const startTimerP = () => {
  playtimerP = setInterval(() => {
    const currentTimeP = VideoPElement.currentTime;
    const durationP = VideoPElement.duration;

    if (!isNaN(currentTimeP) && !isNaN(durationP)) {
      const progressBarPValue = (currentTimeP / durationP) * 100;
      PlayTimeP.textContent = convertTime(currentTimeP);
      ProgressP.value = progressBarPValue;
    }

  }, 100);
  console.log('startTimerP');
};

let isVideoBoxP = true;

if (isVideoBoxP) {
  VideoPElement.addEventListener('loadeddata', () => {
    const maxDurationP = VideoPElement.duration;

    const formattedDurationP = convertTime(maxDurationP);
    EndTimeP.textContent = `${formattedDurationP}`;

    if (ClassI.style.zIndex = "21") {
      startTimerP();
    }

    PauseBtnP.addEventListener('click', () => {
      if (!VideoPElement.paused) {
        VideoPElement.pause();
        stopTimerP();
        PauseBtnP.style.display = 'none';
        PlayBtnP.style.display = 'block';
        console.log('P一時停止をクリックしました');
      }
    });

    PlayBtnP.addEventListener('click', () => {
      if (VideoPElement.paused) {
        startTimerP();
        VideoPElement.play();
        PlayBtnP.style.display = 'none';
        PauseBtnP.style.display = 'block';
        console.log('再生Pアイコンをクリックしました');
      }
    });


    MuteBtnP.addEventListener('click', () => {
      if (VideoPElement.muted) {
        VideoPElement.muted = false;
        MuteBtnP.style.display = 'none';
        UnmuteBtnP.style.display = 'block';
        console.log('Pミュートを解除しました');
      }
    });

    UnmuteBtnP.addEventListener('click', () => {
      if (!VideoPElement.muted) {
        VideoPElement.muted = true;
        UnmuteBtnP.style.display = 'none';
        MuteBtnP.style.display = 'block';
        console.log('Pミュートをクリックしました');
      }
    });

    const stopTimerP = () => {
      VideoPElement.addEventListener("pause", () => {
        clearInterval(playtimerP);
        console.log('stopTimerP');
      });
    };

    ProgressP.addEventListener('input', () => {
      stopTimerP();
      const seekTimeP = calculateSeekTimeP(ProgressP.value);
      if (!isNaN(seekTimeP) && isFinite(seekTimeP) && seekTimeP >= 0 && seekTimeP <= VideoPElement.duration) {
        VideoPElement.currentTime = seekTimeP;
        console.log('Pプログレスバーを操作しました');
      }
    });

    ProgressP.addEventListener('change', () => {
      startTimerP();
      console.log('Pプログレスバーの操作が完了しました');
    });

    const calculateSeekTimeP = (progressValue) => {
      return (progressValue / 100) * VideoPElement.duration;
    };

    const isVideoVisibleP = true;

    VideoPElement.addEventListener('timeupdate', () => {
      const currentTimeP = VideoPElement.currentTime;

      PlayTimeP.textContent = convertTime(VideoPElement.currentTime);
      EndTimeP.textContent = convertTime(VideoPElement.duration);


      if (currentTimeP >= 240) {
        buttonP_Info.style.display = 'block';
        const clickHandler_p_info = () => {
          if (isVideoVisibleP) {

            VideoPElement.pause();
            PauseBtnP.style.display = "none";
            PlayBtnP.style.display = "block";
            console.log('buttonP_Info');
          }
        };
        buttonP_Info.addEventListener("click", clickHandler_p_info);

        buttonP_Info.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_p_info();
          setTimeout(() => {
            ProgressBarP.style.display = "none";
          }, 3000);
        });
      } else {
        buttonP_Info.style.display = 'none';
      }

      if (currentTimeP >= 240) {
        opening_P_A.style.display = 'block';
        const clickHandler_opening_p_a = () => {
          if (isVideoVisibleP) {
            ClassP.style.zIndex = "14";
            VideoPElement.currentTime = 0;
            VideoPElement.pause();
            ProgressBarP.style.zIndex = "-14";
            ProgressBarP.style.display = "none";


            if (VideoPElement.muted) {
              VideoAElement.muted = true;
              btn_mute.style.display = "block";
              btn_unmute.style.display = "none";
            } else if (!VideoPElement.muted) {
              VideoAElement.muted = false;
              btn_unmute.style.display = "block";
              btn_mute.style.display = "none";
            }

            VideoAElement.play();
            ClassA.style.zIndex = "290";
            ProgressBar.style.zIndex = "291";

            console.log('opening_P_A');
          }
        };
        opening_P_A.addEventListener("click", clickHandler_opening_p_a);

        opening_P_A.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_opening_p_a();
          setTimeout(() => {
            ProgressBarP.style.display = "none";
          }, 3000);
        });
      } else {
        opening_P_A.style.display = 'none';
      }

      if (currentTimeP >= 240) {
        back_P_I.style.display = 'block';
        const clickHandler_back_p_i = () => {
          if (isVideoVisibleP) {
            ClassP.style.zIndex = "14";
            VideoPElement.currentTime = 0;
            VideoPElement.pause();
            ProgressBarP.style.zIndex = "-14";
            ProgressBarP.style.display = "none";


            if (VideoPElement.muted) {
              VideoIElement.muted = true;
              MuteBtnI.style.display = "block";
              UnmuteBtnI.style.display = "none";
            } else if (!VideoPElement.muted) {
              VideoIElement.muted = false;
              UnmuteBtnI.style.display = "block";
              MuteBtnI.style.display = "none";
            }

            VideoIElement.play();
            ClassI.style.zIndex = "290";
            ProgressBarI.style.zIndex = "291";

            console.log('back_P_I');
          }
        };
        back_P_I.addEventListener("click", clickHandler_back_p_i);

        back_P_I.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_back_p_i();
          setTimeout(() => {
            ProgressBarP.style.display = "none";
          }, 3000);
        });
      } else {
        back_P_I.style.display = 'none';
      }

      if (currentTimeP >= 255) {
        PauseBtnP.style.display = "none";
        PlayBtnP.style.display = "block";
        VideoPElement.pause();
      }

      console.log('TimeUpDateP');
    });

    console.log('LoadeddataP');
  });
}