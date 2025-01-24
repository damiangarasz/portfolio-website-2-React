import { useEffect, useState } from "react";
import { MovingPieces } from "./movingPieces";

export function Game2() {
  useEffect(() => {
    //usuwam defalutowe działanie przeciągania elementu
    const test = document.querySelectorAll(".chess-grid div");
    function preventDefaultDrag(event: DragEvent) {
      event.preventDefault();
    }
    for (let n of test) {
      n.addEventListener("dragstart", preventDefaultDrag as EventListener);
    }

    return () => {
      for (let n of test) {
        n.removeEventListener("dragstart", preventDefaultDrag as EventListener);
      }
    };
  });

  //początek określania wielkości boardu
  const [rozmiarOkna, setRozmiarOkna] = useState(() => {
    let temp = window.innerWidth * 0.6;
    if (temp >= 580) {
      temp = 580;
    }

    const ret = {
      width: temp + "px",
      height: temp + "px",
    };

    return ret;
  });

  useEffect(() => {
    function resize() {
      let temp = window.innerWidth * 0.6;
      if (temp >= 580) {
        temp = 580;
      }
      const rozmiar = {
        width: temp + "px",
        height: temp + "px",
      };
      setRozmiarOkna(rozmiar);
    }

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  });
  //koniec określania wielkości boardu

  MovingPieces();

  return (
    <div className="chess-grid mx-auto" style={rozmiarOkna}>
      <div id="s1">
        <span className="absolute text-xs">1</span>
        <img className="myImage" src="./img/Game-2/br.png" />
      </div>
      <div id="s2">
        <span className="absolute text-xs">2</span>
        <img className="myImage" src="./img/Game-2/bn.png" />
      </div>
      <div id="s3">
        <span className="absolute text-xs">3</span>
        <img className="myImage" src="./img/Game-2/bb.png" />
      </div>
      <div id="s4">
        <span className="absolute text-xs">4</span>
        <img className="myImage" src="./img/Game-2/bq.png" />
      </div>
      <div id="s5">
        <span className="absolute text-xs">5</span>
        <img className="myImage" src="./img/Game-2/bk.png" />
      </div>
      <div id="s6">
        <span className="absolute text-xs">6</span>
        <img className="myImage" src="./img/Game-2/bb.png" />
      </div>
      <div id="s7">
        <span className="absolute text-xs">7</span>
        <img className="myImage" src="./img/Game-2/bn.png" />
      </div>
      <div id="s8">
        <span className="absolute text-xs">8</span>
        <img className="myImage" src="./img/Game-2/br.png" />
      </div>
      <div id="s9">
        <span className="absolute text-xs">9</span>
        <img className="myImage" src="./img/Game-2/bp.png" />
      </div>
      <div id="s10">
        <span className="absolute text-xs">10</span>
        <img className="myImage" src="./img/Game-2/bp.png" />
      </div>
      <div id="s11">
        <span className="absolute text-xs">11</span>
        <img className="myImage" src="./img/Game-2/bp.png" />
      </div>
      <div id="s12">
        <span className="absolute text-xs">12</span>
        <img className="myImage" src="./img/Game-2/bp.png" />
      </div>
      <div id="s13">
        <span className="absolute text-xs">13</span>
        <img className="myImage" src="./img/Game-2/bp.png" />
      </div>
      <div id="s14">
        <span className="absolute text-xs">14</span>
        <img className="myImage" src="./img/Game-2/bp.png" />
      </div>
      <div id="s15">
        <span className="absolute text-xs">15</span>
        <img className="myImage" src="./img/Game-2/bp.png" />
      </div>
      <div id="s16">
        <span className="absolute text-xs">16</span>
        <img className="myImage" src="./img/Game-2/bp.png" />
      </div>
      <div id="s17">
        <span className="absolute text-xs">17</span>
      </div>
      <div id="s18">
        <span className="absolute text-xs">18</span>
      </div>
      <div id="s19">
        <span className="absolute text-xs">19</span>
      </div>
      <div id="s20">
        <span className="absolute text-xs">20</span>
      </div>
      <div id="s21">
        <span className="absolute text-xs">21</span>
      </div>
      <div id="s22">
        <span className="absolute text-xs">22</span>
      </div>
      <div id="s23">
        <span className="absolute text-xs">23</span>
      </div>
      <div id="s24">
        <span className="absolute text-xs">24</span>
      </div>
      <div id="s25">
        <span className="absolute text-xs">25</span>
      </div>
      <div id="s26">
        <span className="absolute text-xs">26</span>
      </div>
      <div id="s27">
        <span className="absolute text-xs">27</span>
      </div>
      <div id="s28">
        <span className="absolute text-xs">28</span>
      </div>
      <div id="s29">
        <span className="absolute text-xs">29</span>
      </div>
      <div id="s30">
        <span className="absolute text-xs">30</span>
      </div>
      <div id="s31">
        <span className="absolute text-xs">31</span>
      </div>
      <div id="s32">
        <span className="absolute text-xs">32</span>
      </div>
      <div id="s33">
        <span className="absolute text-xs">33</span>
      </div>
      <div id="s34">
        <span className="absolute text-xs">34</span>
      </div>
      <div id="s35">
        <span className="absolute text-xs">35</span>
      </div>
      <div id="s36">
        <span className="absolute text-xs">36</span>
      </div>
      <div id="s37">
        <span className="absolute text-xs">37</span>
      </div>
      <div id="s38">
        <span className="absolute text-xs">38</span>
      </div>
      <div id="s39">
        <span className="absolute text-xs">39</span>
      </div>
      <div id="s40">
        <span className="absolute text-xs">40</span>
      </div>
      <div id="s41">
        <span className="absolute text-xs">41</span>
      </div>
      <div id="s42">
        <span className="absolute text-xs">42</span>
      </div>
      <div id="s43">
        <span className="absolute text-xs">43</span>
      </div>
      <div id="s44">
        <span className="absolute text-xs">44</span>
      </div>
      <div id="s45">
        <span className="absolute text-xs">45</span>
      </div>
      <div id="s46">
        <span className="absolute text-xs">46</span>
      </div>
      <div id="s47">
        <span className="absolute text-xs">47</span>
      </div>
      <div id="s48">
        <span className="absolute text-xs">48</span>
      </div>
      <div id="s49">
        <span className="absolute text-xs">49</span>
        <img className="myImage" src="./img/Game-2/wp.png" />
      </div>
      <div id="s50">
        <span className="absolute text-xs">50</span>
        <img className="myImage" src="./img/Game-2/wp.png" />
      </div>
      <div id="s51">
        <span className="absolute text-xs">51</span>
        <img className="myImage" src="./img/Game-2/wp.png" />
      </div>
      <div id="s52">
        <span className="absolute text-xs">52</span>
        <img className="myImage" src="./img/Game-2/wp.png" />
      </div>
      <div id="s53">
        <span className="absolute text-xs">53</span>
        <img className="myImage" src="./img/Game-2/wp.png" />
      </div>
      <div id="s54">
        <span className="absolute text-xs">54</span>
        <img className="myImage" src="./img/Game-2/wp.png" />
      </div>
      <div id="s55">
        <span className="absolute text-xs">55</span>
        <img className="myImage" src="./img/Game-2/wp.png" />
      </div>
      <div id="s56">
        <span className="absolute text-xs">56</span>
        <img className="myImage" src="./img/Game-2/wp.png" />
      </div>
      <div id="s57">
        <span className="absolute text-xs">57</span>
        <img className="myImage" src="./img/Game-2/wr.png" />
      </div>
      <div id="s58">
        <span className="absolute text-xs">58</span>
        <img className="myImage" src="./img/Game-2/wn.png" />
      </div>
      <div id="s59">
        <span className="absolute text-xs">59</span>
        <img className="myImage" src="./img/Game-2/wb.png" />
      </div>
      <div id="s60">
        <span className="absolute text-xs">60</span>
        <img className="myImage" src="./img/Game-2/wq.png" />
      </div>
      <div id="s61">
        <span className="absolute text-xs">61</span>
        <img className="myImage" src="./img/Game-2/wk.png" />
      </div>
      <div id="s62">
        <span className="absolute text-xs">62</span>
        <img className="myImage" src="./img/Game-2/wb.png" />
      </div>
      <div id="s63">
        <span className="absolute text-xs">63</span>
        <img className="myImage" src="./img/Game-2/wn.png" />
      </div>
      <div id="s64">
        <span className="absolute text-xs">64</span>
        <img className="myImage" src="./img/Game-2/wr.png" />
      </div>
    </div>
  );
}
