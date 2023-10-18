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

ProgressBar.style.display = "block";

let timer = null;

VideoAElement.addEventListener("mousemove", () => {
  if (!VideoAElement.paused) {
    clearTimeout(timer);
    ProgressBar.style.display = "block";
    timer = setTimeout(() => {
      ProgressBar.style.display = "none";
    }, 3000);
  } else {
    clearTimeout(timer);
    ProgressBar.style.display = "block";
  }
});

btn_play.addEventListener("mouseover", () => {
  if (VideoAElement.paused) {
    ProgressBar.style.display = "block";
    clearTimeout(timer);
  } else {
    ProgressBar.style.display = "none";
  }
});

ProgressA.addEventListener("mouseover", () => {
  if (!VideoAElement.paused) {
    ProgressBar.style.display = "block";
    clearTimeout(timer);
  }
});

btn_mute.addEventListener("mouseover", () => {
  if (VideoAElement.muted) {
    clearTimeout(timer);
    ProgressBar.style.display = "block";
  } else {
    ProgressBar.style.display = "none";
  }
});

btn_mute.addEventListener("mouseout", () => {
  ProgressBar.style.display = "none";
});

btn_unmute.addEventListener("mouseover", () => {
  if (!VideoAElement.muted) {
    clearTimeout(timer);
    ProgressBar.style.display = "block";
  } else {
    ProgressBar.style.display = "none";
  }
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

let touchTimer = null;

VideoAElement.addEventListener("touchstart", () => {
  if (!VideoAElement.paused) {
    ProgressBar.style.display = "block";
  } else {
    clearTimeout(touchTimer);
  }
});

btn_pause.addEventListener("touchstart", () => {
  ProgressBar.style.display = "block";
  clearTimeout(touchTimer);
});

function setProgressBarTimeout() {
  ProgressBar.style.display = "none";
}

btn_play.addEventListener("touchstart", () => {
  if (VideoAElement.paused) {
    touchTimer = setTimeout(setProgressBarTimeout, 3000);
  }
});

ProgressA.addEventListener("touchstart", () => {
  if (VideoAElement.paused) {
    ProgressBar.style.display = "block";
    clearTimeout(touchTimer);
  }
});

ProgressA.addEventListener("touchmove", () => {
  ProgressBar.style.display = "block";
  clearTimeout(touchTimer);
});

ProgressA.addEventListener("touchend", () => {
  if (VideoAElement.paused) {
    ProgressBar.style.display = "block";
    clearTimeout(touchTimer);
  } else {
    ProgressBar.style.display = "none";
  }
});

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

    btn_pause.addEventListener("click", () => {
      if (!VideoAElement.paused) {
        VideoAElement.pause();
        stopTimer();
        btn_pause.style.display = 'none';
        btn_play.style.display = 'block';
      }
    });

    btn_play.addEventListener("click", () => {
      if (VideoAElement.paused) {
        startTimer();
        VideoAElement.play();
        btn_play.style.display = 'none';
        btn_pause.style.display = 'block';
        ProgressBar.style.display = "none";
      }
    });

    btn_mute.addEventListener("click", () => {
      if (VideoAElement.muted) {
        VideoAElement.muted = false;
        btn_mute.style.display = 'none';
        btn_unmute.style.display = 'block';
        if (!VideoAElement.paused) {
          ProgressBar.style.display = "none";
        } else {
          ProgressBar.style.display = "block";
        }
      }
    });

    btn_unmute.addEventListener("click", () => {
      if (!VideoAElement.muted) {
        VideoAElement.muted = true;
        btn_unmute.style.display = 'none';
        btn_mute.style.display = 'block';
      }
    });

    const stopTimer = () => {
      clearInterval(playtimer);
    };

    ProgressA.addEventListener('input', () => {
      stopTimer();
      const seekTime = calculateSeekTime(ProgressA.value);
      if (!isNaN(seekTime) && isFinite(seekTime) && seekTime >= 0 && seekTime <= VideoAElement.duration) {
        VideoAElement.currentTime = seekTime;
      }
      console.log('Aプログレスバーを操作しました');
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

let timerB = null;

VideoBElement.addEventListener("mousemove", () => {
  if (!VideoBElement.paused) {
    clearTimeout(timerB);
    ProgressBarB.style.display = "block";
    timerB = setTimeout(() => {
      ProgressBarB.style.display = "none";
    }, 3000);
  } else {
    clearTimeout(timerB);
    ProgressBarB.style.display = "block";
  }
});

PlayBtnB.addEventListener("mouseover", () => {
  if (VideoBElement.paused) {
    ProgressBarB.style.display = "block";
    clearTimeout(timerB);
  } else {
    ProgressBarB.style.display = "none";
  }
});

ProgressB.addEventListener("mouseover", () => {
  if (!VideoBElement.paused) {
    ProgressBarB.style.display = "block";
    clearTimeout(timerB);
  }
});

MuteBtnB.addEventListener("mouseover", () => {
  if (VideoBElement.muted) {
    clearTimeout(timerB);
    ProgressBarB.style.display = "block";
  } else {
    ProgressBarB.style.display = "none";
  }
});

MuteBtnB.addEventListener("mouseout", () => {
  ProgressBarB.style.display = "none";
});

UnmuteBtnB.addEventListener("mouseover", () => {
  if (!VideoBElement.muted) {
    clearTimeout(timerB);
    ProgressBarB.style.display = "block";
  } else {
    ProgressBarB.style.display = "none";
  }
});

UnmuteBtnB.addEventListener("mouseout", () => {
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

function setProgressBarBTimeout() {
  ProgressBarB.style.display = "none";
}
let touchTimerB = null;

VideoBElement.addEventListener("touchstart", () => {
  if (!VideoBElement.paused) {
    ProgressBarB.style.display = "block";
  } else {
    clearTimeout(touchTimerB);
  }
});

PauseBtnB.addEventListener("touchstart", () => {
  ProgressBarB.style.display = "block";
  clearTimeout(touchTimerB);
});

PlayBtnB.addEventListener("touchstart", () => {
  if (VideoBElement.paused) {
    touchTimerB = setTimeout(setProgressBarBTimeout, 3000);
  }
});

ProgressB.addEventListener("touchstart", () => {
  if (VideoBElement.paused) {
    ProgressBarB.style.display = "block";
    clearTimeout(touchTimerB);
  }
});

ProgressB.addEventListener("touchmove", () => {
  ProgressBarB.style.display = "block";
  clearTimeout(touchTimerB);
});

ProgressB.addEventListener("touchend", () => {
  if (VideoBElement.paused) {
    ProgressBarB.style.display = "block";
    clearTimeout(touchTimerB);
  } else {
    ProgressBarB.style.display = "none";
  }
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
        ProgressBarB.style.display = "none";
        console.log('再生Bアイコンをクリックしました');
      }
    });

    MuteBtnB.addEventListener('click', () => {
      if (VideoBElement.muted) {
        VideoBElement.muted = false;
        MuteBtnB.style.display = 'none';
        UnmuteBtnB.style.display = 'block';
        if (!VideoBElement.paused) {
          ProgressBarB.style.display = "none";
        } else {
          ProgressBarB.style.display = "block";
        }
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
      clearInterval(playtimerB);
      console.log('stopTimerB一時停止');
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

let timerC = null;

VideoCElement.addEventListener("mousemove", () => {
  if (!VideoCElement.paused) {
    clearTimeout(timerC);
    ProgressBarC.style.display = "block";
    timerC = setTimeout(() => {
      ProgressBaC.style.display = "none";
    }, 3000);
  } else {
    clearTimeout(timerC);
    ProgressBarC.style.display = "block";
  }
});

PlayBtnC.addEventListener("mouseover", () => {
  if (VideoCElement.paused) {
    ProgressBarC.style.display = "block";
    clearTimeout(timerC);
  } else {
    ProgressBarC.style.display = "none";
  }
});

ProgressC.addEventListener("mouseover", () => {
  if (!VideoCElement.paused) {
    ProgressBarC.style.display = "block";
    clearTimeout(timerC);
  }
});

MuteBtnC.addEventListener("mouseover", () => {
  if (VideoCElement.muted) {
    clearTimeout(timerC);
    ProgressBarC.style.display = "block";
  } else {
    ProgressBarC.style.display = "none";
  }
});

MuteBtnC.addEventListener("mouseout", () => {
  ProgressBarC.style.display = "none";
});

UnmuteBtnC.addEventListener("mouseover", () => {
  if (!VideoCElement.muted) {
    clearTimeout(timerC);
    ProgressBarC.style.display = "block";
  } else {
    ProgressBarC.style.display = "none";
  }
});

UnmuteBtnC.addEventListener("mouseout", () => {
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

function setProgressBarCTimeout() {
  ProgressBarC.style.display = "none";
}
let touchTimerC = null;

VideoCElement.addEventListener("touchstart", () => {
  if (!VideoCElement.paused) {
    ProgressBarC.style.display = "block";
  } else {
    clearTimeout(touchTimerC);
  }
});

PauseBtnC.addEventListener("touchstart", () => {
  ProgressBarC.style.display = "block";
  clearTimeout(touchTimerC);
});

PlayBtnC.addEventListener("touchstart", () => {
  if (VideoCElement.paused) {
    touchTimerC = setTimeout(setProgressBarCTimeout, 3000);
  }
});

ProgressC.addEventListener("touchstart", () => {
  if (VideoCElement.paused) {
    ProgressBarC.style.display = "block";
    clearTimeout(touchTimerC);
  }
});

ProgressC.addEventListener("touchmove", () => {
  ProgressBarC.style.display = "block";
  clearTimeout(touchTimerC);
});

ProgressC.addEventListener("touchend", () => {
  if (VideoCElement.paused) {
    ProgressBarC.style.display = "block";
    clearTimeout(touchTimerC);
  } else {
    ProgressBarC.style.display = "none";
  }
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
    }
    console.log('C一時停止をクリックしました');
  });

  PlayBtnC.addEventListener('click', () => {
    if (VideoCElement.paused) {
      startTimerC();
      VideoCElement.play();
      PlayBtnC.style.display = 'none';
      PauseBtnC.style.display = 'block';
      ProgressBarC.style.display = "none";
    }
    console.log('C再生をクリック');
  });

  MuteBtnC.addEventListener('click', () => {
    if (VideoCElement.muted) {
      VideoCElement.muted = false;
      MuteBtnC.style.display = 'none';
      UnmuteBtnC.style.display = 'block';
      if (!VideoAElement.paused) {
        ProgressBar.style.display = "none";
      } else {
        ProgressBar.style.display = "block";
      }
    }
    console.log('Cミュートを解除しました');
  });

  UnmuteBtnC.addEventListener('click', () => {
    if (!VideoCElement.muted) {
      VideoCElement.muted = true;
      UnmuteBtnC.style.display = 'none';
      MuteBtnC.style.display = 'block';
    }
    console.log('Cミュートをクリックしました');
  });

  const stopTimerC = () => {
    clearInterval(playtimerC);
    console.log('stopTimerC一時停止');
  };

  ProgressC.addEventListener('input', () => {
    stopTimerC();
    const seekTimeC = calculateSeekTimeC(ProgressC.value);
    if (!isNaN(seekTimeC) && isFinite(seekTimeC) && seekTimeC >= 0 && seekTimeC <= VideoCElement.duration) {
      VideoCElement.currentTime = seekTimeC;
    }
    console.log('Cプログレスバーを操作しました');
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

let timerD = null;

VideoDElement.addEventListener("mousemove", () => {
  if (!VideoDElement.paused) {
    clearTimeout(timerD);
    ProgressBarD.style.display = "block";
    timerD = setTimeout(() => {
      ProgressBarD.style.display = "none";
    }, 3000);
  } else {
    clearTimeout(timerD);
    ProgressBarD.style.display = "block";
  }
});

PlayBtnD.addEventListener("mouseover", () => {
  if (VideoDElement.paused) {
    ProgressBarD.style.display = "block";
    clearTimeout(timerD);
  } else {
    ProgressBarD.style.display = "none";
  }
});

ProgressD.addEventListener("mouseover", () => {
  if (!VideoDElement.paused) {
    ProgressBarD.style.display = "block";
    clearTimeout(timerD);
  }
});

MuteBtnD.addEventListener("mouseover", () => {
  if (VideoDElement.muted) {
    clearTimeout(timerD);
    ProgressBarD.style.display = "block";
  } else {
    ProgressBarD.style.display = "none";
  }
});

MuteBtnD.addEventListener("mouseout", () => {
  ProgressBarD.style.display = "none";
});

UnmuteBtnD.addEventListener("mouseover", () => {
  if (!VideoDElement.muted) {
    clearTimeout(timerD);
    ProgressBarD.style.display = "block";
  } else {
    ProgressBarD.style.display = "none";
  }
});

UnmuteBtnD.addEventListener("mouseout", () => {
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

function setProgressBarDTimeout() {
  ProgressBarD.style.display = "none";
}
let touchTimerD = null;

VideoDElement.addEventListener("touchstart", () => {
  if (!VideoDElement.paused) {
    ProgressBarD.style.display = "block";
  } else {
    clearTimeout(touchTimerD);
  }
});

PauseBtnD.addEventListener("touchstart", () => {
  ProgressBarD.style.display = "block";
  clearTimeout(touchTimerD);
});

PlayBtnD.addEventListener("touchstart", () => {
  if (VideoDElement.paused) {
    touchTimerD = setTimeout(setProgressBarDTimeout, 3000);
  }
});

ProgressD.addEventListener("touchstart", () => {
  if (VideoDElement.paused) {
    ProgressBarD.style.display = "block";
    clearTimeout(touchTimerD);
  }
});

ProgressD.addEventListener("touchmove", () => {
  ProgressBarD.style.display = "block";
  clearTimeout(touchTimerD);
});

ProgressD.addEventListener("touchend", () => {
  if (VideoDElement.paused) {
    ProgressBarD.style.display = "block";
    clearTimeout(touchTimerD);
  } else {
    ProgressBarD.style.display = "none";
  }
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
    }
    console.log('D一時停止をクリックしました');
  });

  PlayBtnD.addEventListener('click', () => {
    if (VideoDElement.paused) {
      startTimerD();
      VideoDElement.play();
      PlayBtnD.style.display = 'none';
      PauseBtnD.style.display = 'block';
      ProgressBarD.style.display = "none";
    }
    console.log('D再生をクリックしました');
  });

  MuteBtnD.addEventListener('click', () => {
    if (VideoDElement.muted) {
      VideoDElement.muted = false;
      MuteBtnD.style.display = 'none';
      UnmuteBtnD.style.display = 'block';
      if (!VideoDElement.paused) {
        ProgressBarD.style.display = "none";
      } else {
        ProgressBarD.style.display = "block";
      }
    }
    console.log('Dミュートを解除しました');
  });

  UnmuteBtnD.addEventListener('click', () => {
    if (!VideoDElement.muted) {
      VideoDElement.muted = true;
      UnmuteBtnD.style.display = 'none';
      MuteBtnD.style.display = 'block';
    }
    console.log('Dミュートをクリックしました');
  });

  const stopTimerD = () => {
    clearInterval(playtimerD);
    console.log('stopTimerD');
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

let timerE = null;

VideoEElement.addEventListener("mousemove", () => {
  if (!VideoEElement.paused) {
    clearTimeout(timerE);
    ProgressBarE.style.display = "block";
    timerE = setTimeout(() => {
      ProgressBarE.style.display = "none";
    }, 3000);
  } else {
    clearTimeout(timerE);
    ProgressBarE.style.display = "block";
  }
});

PlayBtnE.addEventListener("mouseover", () => {
  if (VideoEElement.paused) {
    ProgressBarE.style.display = "block";
    clearTimeout(timerE);
  } else {
    ProgressBarE.style.display = "none";
  }
});

ProgressE.addEventListener("mouseover", () => {
  if (!VideoEElement.paused) {
    ProgressBarE.style.display = "block";
    clearTimeout(timerE);
  }
});

MuteBtnE.addEventListener("mouseover", () => {
  if (VideoEElement.muted) {
    clearTimeout(timerE);
    ProgressBarE.style.display = "block";
  } else {
    ProgressBarE.style.display = "none";
  }
});

MuteBtnE.addEventListener("mouseout", () => {
  ProgressBarE.style.display = "none";
});

UnmuteBtnE.addEventListener("mouseover", () => {
  if (!VideoEElement.muted) {
    clearTimeout(timerE);
    ProgressBarE.style.display = "block";
  } else {
    ProgressBarE.style.display = "none";
  }
});

UnmuteBtnE.addEventListener("mouseout", () => {
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

let touchTimerE = null;

VideoEElement.addEventListener("touchstart", () => {
  if (!VideoEElement.paused) {
    ProgressBarE.style.display = "block";
  } else {
    clearTimeout(touchTimerE);
  }
});

PauseBtnE.addEventListener("touchstart", () => {
  ProgressBarE.style.display = "block";
  clearTimeout(touchTimerE);
});

function setProgressBarETimeout() {
  ProgressBarE.style.display = "none";
}

PlayBtnE.addEventListener("touchstart", () => {
  if (VideoEElement.paused) {
    touchTimerE = setTimeout(setProgressBarETimeout, 3000);
  }
});

ProgressE.addEventListener("touchstart", () => {
  if (VideoEElement.paused) {
    ProgressBarE.style.display = "block";
    clearTimeout(touchTimerE);
  }
});

ProgressE.addEventListener("touchmove", () => {
  ProgressBarE.style.display = "block";
  clearTimeout(touchTimerE);
});

ProgressE.addEventListener("touchend", () => {
  if (VideoEElement.paused) {
    ProgressBarE.style.display = "block";
    clearTimeout(touchTimerE);
  } else {
    ProgressBarE.style.display = "none";
  }
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
      }
      console.log('E一時停止をクリックしました');
    });

    PlayBtnE.addEventListener('click', () => {
      if (VideoEElement.paused) {
        startTimerE();
        VideoEElement.play();
        PlayBtnE.style.display = 'none';
        PauseBtnE.style.display = 'block';
        ProgressBarE.style.display = "none";
      }
      console.log('再生Eアイコンをクリックしました');
    });


    MuteBtnE.addEventListener('click', () => {
      if (VideoEElement.muted) {
        VideoEElement.muted = false;
        MuteBtnE.style.display = 'none';
        UnmuteBtnE.style.display = 'block';
        if (!VideoEElement.paused) {
          ProgressBarE.style.display = "none";
        } else {
          ProgressBarE.style.display = "block";
        }
      }
      console.log('Bミュートを解除しました');
    });

    UnmuteBtnE.addEventListener('click', () => {
      if (!VideoEElement.muted) {
        VideoEElement.muted = true;
        UnmuteBtnE.style.display = 'none';
        MuteBtnE.style.display = 'block';
      }
      console.log('Eミュートをクリックしました');
    });

    const stopTimerE = () => {
      clearInterval(playtimerE);
      console.log('stopTimerE');
    };

    ProgressE.addEventListener('input', () => {
      stopTimerE();
      const seekTimeE = calculateSeekTimeE(ProgressE.value);
      if (!isNaN(seekTimeE) && isFinite(seekTimeE) && seekTimeE >= 0 && seekTimeE <= VideoEElement.duration) {
        VideoEElement.currentTime = seekTimeE;
      }
      console.log('Eプログレスバーを操作しました');
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
        buttonE_Info.addEventListener("click", () => {
          if (isVideoVisibleE) {
            VideoEElement.pause();
            PauseBtnE.style.display = "none";
            PlayBtnE.style.display = "block";
          }
        });
      } else {
        buttonE_Info.style.display = 'none';
      }

      if (currentTimeE >= 256) {
        back_E_A.style.display = 'block';
        back_E_A.addEventListener("click", () => {
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
          }
        });
      } else {
        back_E_A.style.display = 'none';
      }

      if (currentTimeE >= 272) {
        PauseBtnE.style.display = "none";
        PlayBtnE.style.display = "block";
        VideoEElement.pause();
      }
    });
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


let timerF = null;

VideoFElement.addEventListener("mousemove", () => {
  if (!VideoFElement.paused) {
    clearTimeout(timerF);
    ProgressBarF.style.display = "block";
    timerF = setTimeout(() => {
      ProgressBarF.style.display = "none";
    }, 3000);
  } else {
    clearTimeout(timerF);
    ProgressBarF.style.display = "block";
  }
});

PlayBtnF.addEventListener("mouseover", () => {
  if (VideoFElement.paused) {
    ProgressBarF.style.display = "block";
    clearTimeout(timerF);
  } else {
    ProgressBarF.style.display = "none";
  }
});

ProgressF.addEventListener("mouseover", () => {
  if (!VideoFElement.paused) {
    ProgressBarF.style.display = "block";
    clearTimeout(timerF);
  }
});

MuteBtnF.addEventListener("mouseover", () => {
  if (VideoFElement.muted) {
    clearTimeout(timerF);
    ProgressBarF.style.display = "block";
  } else {
    ProgressBarF.style.display = "none";
  }
});

MuteBtnF.addEventListener("mouseout", () => {
  ProgressBarF.style.display = "none";
});

UnmuteBtnF.addEventListener("mouseover", () => {
  if (!VideoFElement.muted) {
    clearTimeout(timerF);
    ProgressBarF.style.display = "block";
  } else {
    ProgressBarF.style.display = "none";
  }
});

UnmuteBtnF.addEventListener("mouseout", () => {
  ProgressBar.style.display = "none";
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


let touchTimerF = null;

VideoFElement.addEventListener("touchstart", () => {
  if (!VideoFElement.paused) {
    ProgressBarF.style.display = "block";
  } else {
    clearTimeout(touchTimerF);
  }
});

PauseBtnF.addEventListener("touchstart", () => {
  ProgressBarF.style.display = "block";
  clearTimeout(touchTimerF);
});

function setProgressBarFTimeout() {
  ProgressBarF.style.display = "none";
}

PlayBtnF.addEventListener("touchstart", () => {
  if (VideoFElement.paused) {
    touchTimerF = setTimeout(setProgressBarFTimeout, 3000);
  }
});

ProgressF.addEventListener("touchstart", () => {
  if (VideoFElement.paused) {
    ProgressBarF.style.display = "block";
    clearTimeout(touchTimerF);
  }
});

ProgressF.addEventListener("touchmove", () => {
  ProgressBarF.style.display = "block";
  clearTimeout(touchTimerF);
});

ProgressF.addEventListener("touchend", () => {
  if (VideoFElement.paused) {
    ProgressBarF.style.display = "block";
    clearTimeout(touchTimerF);
  } else {
    ProgressBarF.style.display = "none";
  }
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
      }
      console.log('F一時停止をクリックしました');
    });

    PlayBtnF.addEventListener('click', () => {
      if (VideoFElement.paused) {
        startTimerF();
        VideoFElement.play();
        PlayBtnF.style.display = 'none';
        PauseBtnF.style.display = 'block';
        ProgressBarF.style.display = "none";
      }
    });


    MuteBtnF.addEventListener('click', () => {
      if (VideoFElement.muted) {
        VideoFElement.muted = false;
        MuteBtnF.style.display = 'none';
        UnmuteBtnF.style.display = 'block';
        if (!VideoFElement.paused) {
          ProgressBarF.style.display = "none";
        } else {
          ProgressBarF.style.display = "block";
        }
      }
    });

    UnmuteBtnF.addEventListener('click', () => {
      if (!VideoFElement.muted) {
        VideoFElement.muted = true;
        UnmuteBtnF.style.display = 'none';
        MuteBtnF.style.display = 'block';
      }
    });

    const stopTimerF = () => {
      clearInterval(playtimerF);
      console.log('stopTimerF一時停止');
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

let timerG = null;

VideoGElement.addEventListener("mousemove", () => {
  if (!VideoGElement.paused) {
    clearTimeout(timerG);
    ProgressBarG.style.display = "block";
    timer = setTimeout(() => {
      ProgressBarG.style.display = "none";
    }, 3000);
  } else {
    clearTimeout(timerG);
    ProgressBarG.style.display = "block";
  }
});

PlayBtnG.addEventListener("mouseover", () => {
  if (VideoGElement.paused) {
    ProgressBarG.style.display = "block";
    clearTimeout(timerG);
  } else {
    ProgressBarG.style.display = "none";
  }
});

ProgressG.addEventListener("mouseover", () => {
  if (!VideoGElement.paused) {
    ProgressBarG.style.display = "block";
    clearTimeout(timerG);
  }
});

MuteBtnG.addEventListener("mouseover", () => {
  if (VideoGElement.muted) {
    clearTimeout(timerG);
    ProgressBarG.style.display = "block";
  } else {
    ProgressBarG.style.display = "none";
  }
});

MuteBtnG.addEventListener("mouseout", () => {
  ProgressBarG.style.display = "none";
});

UnmuteBtnG.addEventListener("mouseover", () => {
  if (!VideoGElement.muted) {
    clearTimeout(timerG);
    ProgressBarG.style.display = "block";
  } else {
    ProgressBarG.style.display = "none";
  }
});

UnmuteBtnG.addEventListener("mouseout", () => {
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

let touchTimerG = null;

VideoGElement.addEventListener("touchstart", () => {
  if (!VideoGElement.paused) {
    ProgressBarG.style.display = "block";
  } else {
    clearTimeout(touchTimerG);
  }
});

PauseBtnG.addEventListener("touchstart", () => {
  ProgressBarG.style.display = "block";
  clearTimeout(touchTimerG);
});

function setProgressBarGTimeout() {
  ProgressBarG.style.display = "none";
}

PlayBtnG.addEventListener("touchstart", () => {
  if (VideoGElement.paused) {
    touchTimerG = setTimeout(setProgressBarGTimeout, 3000);
  }
});

ProgressG.addEventListener("touchstart", () => {
  if (VideoGElement.paused) {
    ProgressBarG.style.display = "block";
    clearTimeout(touchTimerG);
  }
});

ProgressG.addEventListener("touchmove", () => {
  ProgressBarG.style.display = "block";
  clearTimeout(touchTimerG);
});

ProgressG.addEventListener("touchend", () => {
  if (VideoGElement.paused) {
    ProgressBarG.style.display = "block";
    clearTimeout(touchTimerG);
  } else {
    ProgressBarG.style.display = "none";
  }
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
      }
    });

    PlayBtnG.addEventListener('click', () => {
      if (VideoGElement.paused) {
        startTimerG();
        VideoGElement.play();
        PlayBtnG.style.display = 'none';
        PauseBtnG.style.display = 'block';
        ProgressBarG.style.display = "none";
      }
    });

    MuteBtnG.addEventListener('click', () => {
      if (VideoGElement.muted) {
        VideoGElement.muted = false;
        MuteBtnG.style.display = 'none';
        UnmuteBtnG.style.display = 'block';
        if (!VideoGElement.paused) {
          ProgressBarG.style.display = "none";
        } else {
          ProgressBarG.style.display = "block";
        }
      }
    });

    UnmuteBtnG.addEventListener('click', () => {
      if (!VideoGElement.muted) {
        VideoGElement.muted = true;
        UnmuteBtnG.style.display = 'none';
        MuteBtnG.style.display = 'block';
      }
    });

    const stopTimerG = () => {
      clearInterval(playtimerG);
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

let timerH = null;

VideoHElement.addEventListener("mousemove", () => {
  if (!VideoHElement.paused) {
    clearTimeout(timerH);
    ProgressBarH.style.display = "block";
    timerH = setTimeout(() => {
      ProgressBarH.style.display = "none";
    }, 3000);
  } else {
    clearTimeout(timerH);
    ProgressBarH.style.display = "block";
  }
});

PlayBtnH.addEventListener("mouseover", () => {
  if (VideoHElement.paused) {
    ProgressBarH.style.display = "block";
    clearTimeout(timerH);
  } else {
    ProgressBarH.style.display = "none";
  }
});

ProgressH.addEventListener("mouseover", () => {
  if (!VideoHElement.paused) {
    ProgressBarH.style.display = "block";
    clearTimeout(timerH);
  }
});

MuteBtnH.addEventListener("mouseover", () => {
  if (VideoHElement.muted) {
    clearTimeout(timerH);
    ProgressBarH.style.display = "block";
  } else {
    ProgressBarH.style.display = "none";
  }
});

MuteBtnH.addEventListener("mouseout", () => {
  ProgressBarH.style.display = "none";
});

UnmuteBtnH.addEventListener("mouseover", () => {
  if (!VideoHElement.muted) {
    clearTimeout(timerH);
    ProgressBarH.style.display = "block";
  } else {
    ProgressBarH.style.display = "none";
  }
});

btn_unmute.addEventListener("mouseout", () => {
  ProgressBar.style.display = "none";
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

let touchTimerH = null;

VideoHElement.addEventListener("touchstart", () => {
  if (!VideoHElement.paused) {
    ProgressBarH.style.display = "block";
  } else {
    clearTimeout(touchTimerH);
  }
});

PauseBtnH.addEventListener("touchstart", () => {
  ProgressBarH.style.display = "block";
  clearTimeout(touchTimerH);
});

function setProgressBarHTimeout() {
  ProgressBarH.style.display = "none";
}

PlayBtnH.addEventListener("touchstart", () => {
  if (VideoHElement.paused) {
    touchTimerH = setTimeout(setProgressBarHTimeout, 3000);
  }
});

ProgressH.addEventListener("touchstart", () => {
  if (VideoHElement.paused) {
    ProgressBarH.style.display = "block";
    clearTimeout(touchTimerH);
  }
});

ProgressH.addEventListener("touchmove", () => {
  ProgressBarH.style.display = "block";
  clearTimeout(touchTimerH);
});

ProgressH.addEventListener("touchend", () => {
  if (VideoHElement.paused) {
    ProgressBarH.style.display = "block";
    clearTimeout(touchTimerH);
  } else {
    ProgressBarH.style.display = "none";
  }
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
      }
    });

    PlayBtnH.addEventListener('click', () => {
      if (VideoHElement.paused) {
        startTimerH();
        VideoHElement.play();
        PlayBtnH.style.display = 'none';
        PauseBtnH.style.display = 'block';
        ProgressBarH.style.display = "none";
      }
    });

    MuteBtnH.addEventListener('click', () => {
      if (VideoHElement.muted) {
        VideoHElement.muted = false;
        MuteBtnH.style.display = 'none';
        UnmuteBtnH.style.display = 'block';
        if (!VideoHElement.paused) {
          ProgressBarH.style.display = "none";
        } else {
          ProgressBarH.style.display = "block";
        }
      }
    });

    UnmuteBtnH.addEventListener('click', () => {
      if (!VideoHElement.muted) {
        VideoHElement.muted = true;
        UnmuteBtnH.style.display = 'none';
        MuteBtnH.style.display = 'block';
      }
    });

    const stopTimerH = () => {
      clearInterval(playtimerH);
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
        buttonM.addEventListener("click", clickHandler_m);

        buttonM.addEventListener("touchstart", (event) => {
          event.preventDefault();
          clickHandler_m();
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

let timerI = null;

VideoIElement.addEventListener("mousemove", () => {
  if (!VideoIElement.paused) {
    clearTimeout(timerI);
    ProgressBarI.style.display = "block";
    timerI = setTimeout(() => {
      ProgressBarI.style.display = "none";
    }, 3000);
  } else {
    clearTimeout(timerI);
    ProgressBarI.style.display = "block";
  }
});

PlayBtnI.addEventListener("mouseover", () => {
  if (VideoIElement.paused) {
    ProgressBarI.style.display = "block";
    clearTimeout(timerI);
  } else {
    ProgressBarI.style.display = "none";
  }
});

ProgressI.addEventListener("mouseover", () => {
  if (!VideoIElement.paused) {
    ProgressBarI.style.display = "block";
    clearTimeout(timerI);
  }
});

MuteBtnI.addEventListener("mouseover", () => {
  if (VideoIElement.muted) {
    clearTimeout(timerI);
    ProgressBarI.style.display = "block";
  } else {
    ProgressBarI.style.display = "none";
  }
});

MuteBtnI.addEventListener("mouseout", () => {
  ProgressBarI.style.display = "none";
});

UnmuteBtnI.addEventListener("mouseover", () => {
  if (!VideoIElement.muted) {
    clearTimeout(timerI);
    ProgressBarI.style.display = "block";
  } else {
    ProgressBarI.style.display = "none";
  }
});

UnmuteBtnI.addEventListener("mouseout", () => {
  ProgressBar.style.display = "none";
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

let touchTimerI = null;

VideoIElement.addEventListener("touchstart", () => {
  if (!VideoIElement.paused) {
    ProgressBarI.style.display = "block";
  } else {
    clearTimeout(touchTimerI);
  }
});

PauseBtnI.addEventListener("touchstart", () => {
  ProgressBarI.style.display = "block";
  clearTimeout(touchTimerI);
});

function setProgressBarITimeout() {
  ProgressBarI.style.display = "none";
}

PlayBtnI.addEventListener("touchstart", () => {
  if (VideoIElement.paused) {
    touchTimerI = setTimeout(setProgressBarITimeout, 3000);
  }
});

ProgressI.addEventListener("touchstart", () => {
  if (VideoIElement.paused) {
    ProgressBarI.style.display = "block";
    clearTimeout(touchTimerI);
  }
});

ProgressI.addEventListener("touchmove", () => {
  ProgressBarI.style.display = "block";
  clearTimeout(touchTimerI);
});

ProgressI.addEventListener("touchend", () => {
  if (VideoIElement.paused) {
    ProgressBarI.style.display = "block";
    clearTimeout(touchTimerI);
  } else {
    ProgressBarI.style.display = "none";
  }
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
      }
    });

    PlayBtnI.addEventListener('click', () => {
      if (VideoIElement.paused) {
        startTimerI();
        VideoIElement.play();
        PlayBtnI.style.display = 'none';
        PauseBtnI.style.display = 'block';
        ProgressBarI.style.display = "none";
      }
    });

    MuteBtnI.addEventListener('click', () => {
      if (VideoIElement.muted) {
        VideoIElement.muted = false;
        MuteBtnI.style.display = 'none';
        UnmuteBtnI.style.display = 'block';
        if (!VideoIElement.paused) {
          ProgressBarI.style.display = "none";
        } else {
          ProgressBarI.style.display = "block";
        }
      }
    });

    UnmuteBtnI.addEventListener('click', () => {
      if (!VideoIElement.muted) {
        VideoIElement.muted = true;
        UnmuteBtnI.style.display = 'none';
        MuteBtnI.style.display = 'block';
      }
    });

    const stopTimerI = () => {
      clearInterval(playtimerI);
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

let timerJ = null;

VideoJElement.addEventListener("mousemove", () => {
  if (!VideoJElement.paused) {
    clearTimeout(timerJ);
    ProgressBarJ.style.display = "block";
    timerJ = setTimeout(() => {
      ProgressBarJ.style.display = "none";
    }, 3000);
  } else {
    clearTimeout(timerJ);
    ProgressBarJ.style.display = "block";
  }
});

PlayBtnJ.addEventListener("mouseover", () => {
  if (VideoJElement.paused) {
    ProgressBarJ.style.display = "block";
    clearTimeout(timerJ);
  } else {
    ProgressBarJ.style.display = "none";
  }
});

ProgressJ.addEventListener("mouseover", () => {
  if (!VideoJElement.paused) {
    ProgressBarJ.style.display = "block";
    clearTimeout(timerJ);
  }
});

MuteBtnJ.addEventListener("mouseover", () => {
  if (VideoJElement.muted) {
    clearTimeout(timerJ);
    ProgressBarJ.style.display = "block";
  } else {
    ProgressBarJ.style.display = "none";
  }
});

MuteBtnJ.addEventListener("mouseout", () => {
  ProgressBarJ.style.display = "none";
});

UnmuteBtnJ.addEventListener("mouseover", () => {
  if (!VideoJElement.muted) {
    clearTimeout(timerJ);
    ProgressBarJ.style.display = "block";
  } else {
    ProgressBarJ.style.display = "none";
  }
});

UnmuteBtnJ.addEventListener("mouseout", () => {
  ProgressBar.style.display = "none";
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

let touchTimerJ = null;

VideoJElement.addEventListener("touchstart", () => {
  if (!VideoJElement.paused) {
    ProgressBarJ.style.display = "block";
  } else {
    clearTimeout(touchTimerJ);
  }
});

PauseBtnJ.addEventListener("touchstart", () => {
  ProgressBarJ.style.display = "block";
  clearTimeout(touchTimerJ);
});

function setProgressBarJTimeout() {
  ProgressBarJ.style.display = "none";
}

PlayBtnJ.addEventListener("touchstart", () => {
  if (VideoJElement.paused) {
    touchTimerJ = setTimeout(setProgressBarJTimeout, 3000);
  }
});

ProgressJ.addEventListener("touchstart", () => {
  if (VideoJElement.paused) {
    ProgressBarJ.style.display = "block";
    clearTimeout(touchTimerJ);
  }
});

ProgressJ.addEventListener("touchmove", () => {
  ProgressBarJ.style.display = "block";
  clearTimeout(touchTimerJ);
});

ProgressJ.addEventListener("touchend", () => {
  if (VideoJElement.paused) {
    ProgressBarJ.style.display = "block";
    clearTimeout(touchTimerJ);
  } else {
    ProgressBarJ.style.display = "none";
  }
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
      }
    });

    PlayBtnJ.addEventListener('click', () => {
      if (VideoJElement.paused) {
        startTimerJ();
        VideoJElement.play();
        PlayBtnJ.style.display = 'none';
        PauseBtnJ.style.display = 'block';
        ProgressBarJ.style.display = "none";
      }
    });


    MuteBtnJ.addEventListener('click', () => {
      if (VideoJElement.muted) {
        VideoJElement.muted = false;
        MuteBtnJ.style.display = 'none';
        UnmuteBtnJ.style.display = 'block';
        if (!VideoJElement.paused) {
          ProgressBarJ.style.display = "none";
        } else {
          ProgressBarJ.style.display = "block";
        }
      }
    });

    UnmuteBtnJ.addEventListener('click', () => {
      if (!VideoJElement.muted) {
        VideoJElement.muted = true;
        UnmuteBtnJ.style.display = 'none';
        MuteBtnJ.style.display = 'block';
      }
    });

    const stopTimerJ = () => {
      clearInterval(playtimerJ);
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

let timerK = null;

VideoKElement.addEventListener("mousemove", () => {
  if (!VideoKElement.paused) {
    clearTimeout(timerK);
    ProgressBarK.style.display = "block";
    timerK = setTimeout(() => {
      ProgressBarK.style.display = "none";
    }, 3000);
  } else {
    clearTimeout(timerK);
    ProgressBarK.style.display = "block";
  }
});

PlayBtnK.addEventListener("mouseover", () => {
  if (VideoKElement.paused) {
    ProgressBarK.style.display = "block";
    clearTimeout(timerK);
  } else {
    ProgressBarK.style.display = "none";
  }
});

ProgressK.addEventListener("mouseover", () => {
  if (!VideoKElement.paused) {
    ProgressBarK.style.display = "block";
    clearTimeout(timerK);
  }
});

MuteBtnK.addEventListener("mouseover", () => {
  if (VideoKElement.muted) {
    clearTimeout(timerK);
    ProgressBarK.style.display = "block";
  } else {
    ProgressBarK.style.display = "none";
  }
});

MuteBtnK.addEventListener("mouseout", () => {
  ProgressBarK.style.display = "none";
});

UnmuteBtnK.addEventListener("mouseover", () => {
  if (!VideoKElement.muted) {
    clearTimeout(timerK);
    ProgressBarK.style.display = "block";
  } else {
    ProgressBarK.style.display = "none";
  }
});

UnmuteBtnK.addEventListener("mouseout", () => {
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

let touchTimerK = null;

VideoKElement.addEventListener("touchstart", () => {
  if (!VideoKElement.paused) {
    ProgressBarK.style.display = "block";
  } else {
    clearTimeout(touchTimerK);
  }
});

PauseBtnK.addEventListener("touchstart", () => {
  ProgressBarK.style.display = "block";
  clearTimeout(touchTimerK);
});

function setProgressBarKTimeout() {
  ProgressBarK.style.display = "none";
}

PlayBtnK.addEventListener("touchstart", () => {
  if (VideoKElement.paused) {
    touchTimerK = setTimeout(setProgressBarKTimeout, 3000);
  }
});

ProgressK.addEventListener("touchstart", () => {
  if (VideoKElement.paused) {
    ProgressBarK.style.display = "block";
    clearTimeout(touchTimerK);
  }
});

ProgressK.addEventListener("touchmove", () => {
  ProgressBarK.style.display = "block";
  clearTimeout(touchTimerK);
});

ProgressK.addEventListener("touchend", () => {
  if (VideoKElement.paused) {
    ProgressBarK.style.display = "block";
    clearTimeout(touchTimerK);
  } else {
    ProgressBarK.style.display = "none";
  }
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
      }
    });

    PlayBtnK.addEventListener('click', () => {
      if (VideoKElement.paused) {
        startTimerK();
        VideoKElement.play();
        PlayBtnK.style.display = 'none';
        PauseBtnK.style.display = 'block';
        ProgressBarK.style.display = "none";
      }
    });


    MuteBtnK.addEventListener('click', () => {
      if (VideoKElement.muted) {
        VideoKElement.muted = false;
        MuteBtnK.style.display = 'none';
        UnmuteBtnK.style.display = 'block';
        if (!VideoKElement.paused) {
          ProgressBarK.style.display = "none";
        } else {
          ProgressBarK.style.display = "block";
        }
      }
    });

    UnmuteBtnK.addEventListener('click', () => {
      if (!VideoKElement.muted) {
        VideoKElement.muted = true;
        UnmuteBtnK.style.display = 'none';
        MuteBtnK.style.display = 'block';
      }
    });

    const stopTimerK = () => {
      clearInterval(playtimerK);
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

let timerL = null;

VideoLElement.addEventListener("mousemove", () => {
  if (!VideoLElement.paused) {
    clearTimeout(timerL);
    ProgressBarL.style.display = "block";
    timerL = setTimeout(() => {
      ProgressBarL.style.display = "none";
    }, 3000);
  } else {
    clearTimeout(timerL);
    ProgressBarL.style.display = "block";
  }
});

PlayBtnL.addEventListener("mouseover", () => {
  if (VideoLElement.paused) {
    ProgressBarL.style.display = "block";
    clearTimeout(timerL);
  } else {
    ProgressBarL.style.display = "none";
  }
});

ProgressL.addEventListener("mouseover", () => {
  if (!VideoLElement.paused) {
    ProgressBarL.style.display = "block";
    clearTimeout(timerL);
  }
});

MuteBtnL.addEventListener("mouseover", () => {
  if (VideoLElement.muted) {
    clearTimeout(timerL);
    ProgressBarL.style.display = "block";
  } else {
    ProgressBarL.style.display = "none";
  }
});

MuteBtnL.addEventListener("mouseout", () => {
  ProgressBarL.style.display = "none";
});

UnmuteBtnL.addEventListener("mouseover", () => {
  if (!VideoLElement.muted) {
    clearTimeout(timerL);
    ProgressBarL.style.display = "block";
  } else {
    ProgressBarL.style.display = "none";
  }
});

UnmuteBtnL.addEventListener("mouseout", () => {
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

let touchTimerL = null;

VideoLElement.addEventListener("touchstart", () => {
  if (!VideoLElement.paused) {
    ProgressBarL.style.display = "block";
  } else {
    clearTimeout(touchTimerL);
  }
});

PauseBtnL.addEventListener("touchstart", () => {
  ProgressBarL.style.display = "block";
  clearTimeout(touchTimerL);
});

function setProgressBarLTimeout() {
  ProgressBarL.style.display = "none";
}

PlayBtnL.addEventListener("touchstart", () => {
  if (VideoLElement.paused) {
    touchTimerL = setTimeout(setProgressBarLTimeout, 3000);
  }
});

ProgressL.addEventListener("touchstart", () => {
  if (VideoLElement.paused) {
    ProgressBarL.style.display = "block";
    clearTimeout(touchTimerL);
  }
});

ProgressL.addEventListener("touchmove", () => {
  ProgressBarL.style.display = "block";
  clearTimeout(touchTimerL);
});

ProgressL.addEventListener("touchend", () => {
  if (VideoLElement.paused) {
    ProgressBarL.style.display = "block";
    clearTimeout(touchTimerL);
  } else {
    ProgressBarL.style.display = "none";
  }
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
      }
    });

    PlayBtnL.addEventListener('click', () => {
      if (VideoLElement.paused)
        startTimerL();
      VideoLElement.play();
      PlayBtnL.style.display = 'none';
      PauseBtnL.style.display = 'block';
      ProgressBarL.style.display = "none";
    });


    MuteBtnL.addEventListener('click', () => {
      if (VideoLElement.muted) {
        VideoLElement.muted = false;
        MuteBtnL.style.display = 'none';
        UnmuteBtnL.style.display = 'block';
        if (!VideoLElement.paused) {
          ProgressBarL.style.display = "none";
        } else {
          ProgressBarL.style.display = "block";
        }
      }
    });

    UnmuteBtnL.addEventListener('click', () => {
      if (!VideoLElement.muted) {
        VideoLElement.muted = true;
        UnmuteBtnL.style.display = 'none';
        MuteBtnL.style.display = 'block';
      }
    });

    const stopTimerL = () => {
      clearInterval(playtimerL);
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

let timerM = null;

VideoMElement.addEventListener("mousemove", () => {
  if (!VideoMElement.paused) {
    clearTimeout(timerM);
    ProgressBarM.style.display = "block";
    timerM = setTimeout(() => {
      ProgressBarM.style.display = "none";
    }, 3000);
  } else {
    clearTimeout(timerM);
    ProgressBarM.style.display = "block";
  }
});

PlayBtnM.addEventListener("mouseover", () => {
  if (VideoMElement.paused) {
    ProgressBarM.style.display = "block";
    clearTimeout(timerM);
  } else {
    ProgressBarM.style.display = "none";
  }
});

ProgressM.addEventListener("mouseover", () => {
  if (!VideoMElement.paused) {
    ProgressBarM.style.display = "block";
    clearTimeout(timerM);
  }
});

MuteBtnM.addEventListener("mouseover", () => {
  if (VideoMElement.muted) {
    clearTimeout(timerM);
    ProgressBarM.style.display = "block";
  } else {
    ProgressBarM.style.display = "none";
  }
});

MuteBtnM.addEventListener("mouseout", () => {
  ProgressBarM.style.display = "none";
});

UnmuteBtnM.addEventListener("mouseover", () => {
  if (!VideoMElement.muted) {
    clearTimeout(timerM);
    ProgressBarM.style.display = "block";
  } else {
    ProgressBarM.style.display = "none";
  }
});

UnmuteBtnM.addEventListener("mouseout", () => {
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

let touchTimerM = null;

VideoMElement.addEventListener("touchstart", () => {
  if (!VideoMElement.paused) {
    ProgressBarM.style.display = "block";
  } else {
    clearTimeout(touchTimerM);
  }
});

PauseBtnM.addEventListener("touchstart", () => {
  ProgressBarM.style.display = "block";
  clearTimeout(touchTimerM);
});

function setProgressBarMTimeout() {
  ProgressBarM.style.display = "none";
}

PlayBtnM.addEventListener("touchstart", () => {
  if (VideoMElement.paused) {
    touchTimer = setTimeout(setProgressBarMTimeout, 3000);
  }
});

ProgressM.addEventListener("touchstart", () => {
  if (VideoMElement.paused) {
    ProgressBarM.style.display = "block";
    clearTimeout(touchTimerM);
  }
});

ProgressM.addEventListener("touchmove", () => {
  ProgressBarM.style.display = "block";
  clearTimeout(touchTimerM);
});

ProgressM.addEventListener("touchend", () => {
  if (VideoMElement.paused) {
    ProgressBarM.style.display = "block";
    clearTimeout(touchTimerM);
  } else {
    ProgressBarM.style.display = "none";
  }
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
      }
    });

    PlayBtnM.addEventListener('click', () => {
      if (VideoMElement.paused) {
        startTimerM();
        VideoMElement.play();
        PlayBtnM.style.display = 'none';
        PauseBtnM.style.display = 'block';
        ProgressBarM.style.display = "none";
      }
    });


    MuteBtnM.addEventListener('click', () => {
      if (VideoMElement.muted) {
        VideoMElement.muted = false;
        MuteBtnM.style.display = 'none';
        UnmuteBtnM.style.display = 'block';
        if (!VideoMElement.paused) {
          ProgressBarM.style.display = "none";
        } else {
          ProgressBarM.style.display = "block";
        }
      }
    });

    UnmuteBtnM.addEventListener('click', () => {
      if (!VideoMElement.muted) {
        VideoMElement.muted = true;
        UnmuteBtnM.style.display = 'none';
        MuteBtnM.style.display = 'block';
      }
    });

    const stopTimerM = () => {
      clearInterval(playtimerM);
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

let timerN = null;

VideoNElement.addEventListener("mousemove", () => {
  if (!VideoNElement.paused) {
    clearTimeout(timerN);
    ProgressBarN.style.display = "block";
    timerN = setTimeout(() => {
      ProgressBarN.style.display = "none";
    }, 3000);
  } else {
    clearTimeout(timerN);
    ProgressBarN.style.display = "block";
  }
});

PlayBtnN.addEventListener("mouseover", () => {
  if (VideoNElement.paused) {
    ProgressBarN.style.display = "block";
    clearTimeout(timerN);
  } else {
    ProgressBarN.style.display = "none";
  }
});

ProgressN.addEventListener("mouseover", () => {
  if (!VideoNElement.paused) {
    ProgressBarN.style.display = "block";
    clearTimeout(timerN);
  }
});

MuteBtnN.addEventListener("mouseover", () => {
  if (VideoNElement.muted) {
    clearTimeout(timerN);
    ProgressBarN.style.display = "block";
  } else {
    ProgressBarN.style.display = "none";
  }
});

MuteBtnN.addEventListener("mouseout", () => {
  ProgressBarN.style.display = "none";
});

UnmuteBtnN.addEventListener("mouseover", () => {
  if (!VideoNElement.muted) {
    clearTimeout(timerN);
    ProgressBarN.style.display = "block";
  } else {
    ProgressBarN.style.display = "none";
  }
});

UnmuteBtnN.addEventListener("mouseout", () => {
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

let touchTimerN = null;

VideoNElement.addEventListener("touchstart", () => {
  if (!VideoNElement.paused) {
    ProgressBarN.style.display = "block";
  } else {
    clearTimeout(touchTimerN);
  }
});

PauseBtnN.addEventListener("touchstart", () => {
  ProgressBarN.style.display = "block";
  clearTimeout(touchTimerN);
});

function setProgressBarNTimeout() {
  ProgressBarN.style.display = "none";
}

PlayBtnN.addEventListener("touchstart", () => {
  if (VideoNElement.paused) {
    touchTimerN = setTimeout(setProgressBarNTimeout, 3000);
  }
});

ProgressN.addEventListener("touchstart", () => {
  if (VideoNElement.paused) {
    ProgressBarN.style.display = "block";
    clearTimeout(touchTimerN);
  }
});

ProgressN.addEventListener("touchmove", () => {
  ProgressBarN.style.display = "block";
  clearTimeout(touchTimerN);
});

ProgressN.addEventListener("touchend", () => {
  if (VideoNElement.paused) {
    ProgressBarN.style.display = "block";
    clearTimeout(touchTimerN);
  } else {
    ProgressBarN.style.display = "none";
  }
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
      }
    });

    PlayBtnN.addEventListener('click', () => {
      if (VideoNElement.paused) {
        startTimerN();
        VideoNElement.play();
        PlayBtnN.style.display = 'none';
        PauseBtnN.style.display = 'block';
        ProgressBarN.style.display = "none";
      }
    });


    MuteBtnN.addEventListener('click', () => {
      if (VideoNElement.muted) {
        VideoNElement.muted = false;
        MuteBtnN.style.display = 'none';
        UnmuteBtnN.style.display = 'block';
        if (!VideoNElement.paused) {
          ProgressBarN.style.display = "none";
        } else {
          ProgressBarN.style.display = "block";
        }
      }
    });

    UnmuteBtnN.addEventListener('click', () => {
      if (!VideoNElement.muted) {
        VideoNElement.muted = true;
        UnmuteBtnN.style.display = 'none';
        MuteBtnN.style.display = 'block';
      }
    });

    const stopTimerN = () => {
      clearInterval(playtimerN);
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

let timerO = null;

VideoOElement.addEventListener("mousemove", () => {
  if (!VideoOElement.paused) {
    clearTimeout(timerO);
    ProgressBarO.style.display = "block";
    timerO = setTimeout(() => {
      ProgressBarO.style.display = "none";
    }, 3000);
  } else {
    clearTimeout(timerO);
    ProgressBarO.style.display = "block";
  }
});

PlayBtnO.addEventListener("mouseover", () => {
  if (VideoOElement.paused) {
    ProgressBarO.style.display = "block";
    clearTimeout(timerO);
  } else {
    ProgressBarO.style.display = "none";
  }
});

ProgressO.addEventListener("mouseover", () => {
  if (!VideoOElement.paused) {
    ProgressBarO.style.display = "block";
    clearTimeout(timerO);
  }
});

MuteBtnO.addEventListener("mouseover", () => {
  if (VideoOElement.muted) {
    clearTimeout(timerO);
    ProgressBarO.style.display = "block";
  } else {
    ProgressBarO.style.display = "none";
  }
});

MuteBtnO.addEventListener("mouseout", () => {
  ProgressBarO.style.display = "none";
});

UnmuteBtnO.addEventListener("mouseover", () => {
  if (!VideoOElement.muted) {
    clearTimeout(timerO);
    ProgressBarO.style.display = "block";
  } else {
    ProgressBarO.style.display = "none";
  }
});

UnmuteBtnO.addEventListener("mouseout", () => {
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

let touchTimerO = null;

VideoOElement.addEventListener("touchstart", () => {
  if (!VideoOElement.paused) {
    ProgressBarO.style.display = "block";
  } else {
    clearTimeout(touchTimerO);
  }
});

PauseBtnO.addEventListener("touchstart", () => {
  ProgressBarO.style.display = "block";
  clearTimeout(touchTimerO);
});

function setProgressBarOTimeout() {
  ProgressBarO.style.display = "none";
}

PlayBtnO.addEventListener("touchstart", () => {
  if (VideoOElement.paused) {
    touchTimerO = setTimeout(setProgressBarOTimeout, 3000);
  }
});

ProgressO.addEventListener("touchstart", () => {
  if (VideoOElement.paused) {
    ProgressBarO.style.display = "block";
    clearTimeout(touchTimerO);
  }
});

ProgressO.addEventListener("touchmove", () => {
  ProgressBarO.style.display = "block";
  clearTimeout(touchTimerO);
});

ProgressO.addEventListener("touchend", () => {
  if (VideoOElement.paused) {
    ProgressBarO.style.display = "block";
    clearTimeout(touchTimerO);
  } else {
    ProgressBarO.style.display = "none";
  }
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
      }
    });

    PlayBtnO.addEventListener('click', () => {
      if (VideoOElement.paused) {
        startTimerO();
        VideoOElement.play();
        PlayBtnO.style.display = 'none';
        PauseBtnO.style.display = 'block';
        ProgressBarO.style.display = "none";
      }
    });


    MuteBtnO.addEventListener('click', () => {
      if (VideoOElement.muted) {
        VideoOElement.muted = false;
        MuteBtnO.style.display = 'none';
        UnmuteBtnO.style.display = 'block'; if (!VideoOElement.paused) {
          ProgressBarO.style.display = "none";
        } else {
          ProgressBarO.style.display = "block";
        }
      }
    });

    UnmuteBtnO.addEventListener('click', () => {
      if (!VideoOElement.muted) {
        VideoOElement.muted = true;
        UnmuteBtnO.style.display = 'none';
        MuteBtnO.style.display = 'block';
      }
    });

    const stopTimerO = () => {
      clearInterval(playtimerO);
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

let timerP = null;

VideoPElement.addEventListener("mousemove", () => {
  if (!VideoPElement.paused) {
    clearTimeout(timerP);
    ProgressBarP.style.display = "block";
    timerP = setTimeout(() => {
      ProgressBarP.style.display = "none";
    }, 3000);
  } else {
    clearTimeout(timerP);
    ProgressBarP.style.display = "block";
  }
});

PlayBtnP.addEventListener("mouseover", () => {
  if (VideoPElement.paused) {
    ProgressBarP.style.display = "block";
    clearTimeout(timerP);
  } else {
    ProgressBarP.style.display = "none";
  }
});

ProgressP.addEventListener("mouseover", () => {
  if (!VideoPElement.paused) {
    ProgressBarP.style.display = "block";
    clearTimeout(timerP);
  }
});

MuteBtnP.addEventListener("mouseover", () => {
  if (VideoPElement.muted) {
    clearTimeout(timerP);
    ProgressBarP.style.display = "block";
  } else {
    ProgressBarP.style.display = "none";
  }
});

MuteBtnP.addEventListener("mouseout", () => {
  ProgressBarP.style.display = "none";
});

UnmuteBtnP.addEventListener("mouseover", () => {
  if (!VideoPElement.muted) {
    clearTimeout(timerP);
    ProgressBarP.style.display = "block";
  } else {
    ProgressBarP.style.display = "none";
  }
});

UnmuteBtnP.addEventListener("mouseout", () => {
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

let touchTimerP = null;

VideoPElement.addEventListener("touchstart", () => {
  if (!VideoPElement.paused) {
    ProgressBarP.style.display = "block";
  } else {
    clearTimeout(touchTimerP);
  }
});

PauseBtnP.addEventListener("touchstart", () => {
  ProgressBarP.style.display = "block";
  clearTimeout(touchTimerP);
});

function setProgressBarPTimeout() {
  ProgressBarP.style.display = "none";
}

PlayBtnP.addEventListener("touchstart", () => {
  if (VideoPElement.paused) {
    touchTimerP = setTimeout(setProgressBarPTimeout, 3000);
  }
});

ProgressP.addEventListener("touchstart", () => {
  if (VideoPElement.paused) {
    ProgressBarP.style.display = "block";
    clearTimeout(touchTimerP);
  }
});

ProgressP.addEventListener("touchmove", () => {
  ProgressBarP.style.display = "block";
  clearTimeout(touchTimerP);
});

ProgressP.addEventListener("touchend", () => {
  if (VideoPElement.paused) {
    ProgressBarP.style.display = "block";
    clearTimeout(touchTimerP);
  } else {
    ProgressBarP.style.display = "none";
  }
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
      }
    });

    PlayBtnP.addEventListener('click', () => {
      if (VideoPElement.paused) {
        startTimerP();
        VideoPElement.play();
        PlayBtnP.style.display = 'none';
        PauseBtnP.style.display = 'block';
        ProgressBarP.style.display = "none";
      }
    });


    MuteBtnP.addEventListener('click', () => {
      if (VideoPElement.muted) {
        VideoPElement.muted = false;
        MuteBtnP.style.display = 'none';
        UnmuteBtnP.style.display = 'block';
        if (!VideoPElement.paused) {
          ProgressBarP.style.display = "none";
        } else {
          ProgressBarP.style.display = "block";
        }
      }
    });

    UnmuteBtnP.addEventListener('click', () => {
      if (!VideoPElement.muted) {
        VideoPElement.muted = true;
        UnmuteBtnP.style.display = 'none';
        MuteBtnP.style.display = 'block';
      }
    });

    const stopTimerP = () => {
      clearInterval(playtimerP);
    };

    ProgressP.addEventListener('input', () => {
      stopTimerP();
      const seekTimeP = calculateSeekTimeP(ProgressP.value);
      if (!isNaN(seekTimeP) && isFinite(seekTimeP) && seekTimeP >= 0 && seekTimeP <= VideoPElement.duration) {
        VideoPElement.currentTime = seekTimeP;
      }
    });

    ProgressP.addEventListener('change', () => {
      startTimerP();
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