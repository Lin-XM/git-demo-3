let n = 1;
nextPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (
      request.readyState === 4 &&
      request.status >= 200 &&
      request.status < 300
    ) {
      console.log(request.response);
      const array = JSON.parse(request.response);
      array.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      n += 1;
    }
  };
  request.send();
};
getJson.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/test.json");
  request.onreadystatechange = () => {
    if (
      request.readyState === 4 &&
      request.status >= 200 &&
      request.status < 300
    ) {
      // console.log(request.response);
      const object = JSON.parse(request.response);
      console.log(object);
      myName.textContent = object.name;
    }
  };
  request.send();
};
getXml.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/test.xml");
  request.onreadystatechange = () => {
    if (
      request.readyState === 4 &&
      request.status >= 200 &&
      request.status < 300
    ) {
      console.log(request.responseXML);
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text.trim());
    }
  };
  request.send();
};

getJs.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/test.js");
  request.onload = () => {
    const script = document.createElement("script");
    script.innerHTML = request.response;
    document.body.appendChild(script);
  };
  request.onerror = () => {
    console.log("失败了");
  };
  request.send();
};

getHtml.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/test.html");
  request.onload = () => {
    const html = document.createElement("div");
    html.innerHTML = request.response;
    document.body.appendChild(html);
  };
  request.onerror = () => {
    console.log("失败了");
  };
  request.send();
};

getCss.onclick = () => {
  // 1. 使用 XMLHttpRequest 方法 创建对象
  const request = new XMLHttpRequest();
  // 2. 调用对象 open('GET/Request'.'URL')
  request.open("GET", "/style.css");
  //   3.监听对象函数
  // 用 onreadystatechange
  request.onreadystatechange = () => {
    console.log(request.readyState);
    // 下载完成，但是不知道是否成功
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.appendChild(style);
        console.log("下载完成！");
      } else {
        alert("加载 CSS 失败！！");
      }
    }
  };
  // 4. 调用send 方法
  request.send();
};
