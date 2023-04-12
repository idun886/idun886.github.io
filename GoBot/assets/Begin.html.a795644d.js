import{_ as e,o as n,c as i,d as s}from"./app.befa7adb.js";const o="/GoBot/images/新建GoBot项目.png",a="/GoBot/images/下载依赖01.png",l="/GoBot/images/依赖下载02.png",d="/GoBot/images/InitGoBot.png",t="/GoBot/images/运行截图01.png",c="/GoBot/images/示例发送成功截图01.png",r={},u=s('<h1 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h1><h2 id="新建项目" tabindex="-1"><a class="header-anchor" href="#新建项目" aria-hidden="true">#</a> 新建项目</h2><blockquote><ol><li>打开goland新建一个项目,(不要选择GOPATH那个选项)</li></ol><p><img src="'+o+`" alt=""></p></blockquote><h2 id="下载依赖" tabindex="-1"><a class="header-anchor" href="#下载依赖" aria-hidden="true">#</a> 下载依赖</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go get <span class="token string">&quot;github.com/idun886/GoBot&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+a+`" alt=""></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go get <span class="token string">&quot;github.com/idun886/InitGoBot&quot;</span>
go <span class="token function">install</span> <span class="token string">&quot;github.com/idun886/InitGoBot&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+l+`" alt=""></p><h2 id="初始化项目" tabindex="-1"><a class="header-anchor" href="#初始化项目" aria-hidden="true">#</a> 初始化项目</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>InitGoBot
go mod tidy   清除一下不需要的包
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+`" alt=""></p><blockquote><p>此时你的项目里多出来了main.go,Registered.go和config.json三个文件</p><p><code>main.go为运行 GoBot的主程序</code></p><p><code>Registered.go是注册插件的go文件</code></p><p><code>config.json是配置文件</code></p></blockquote><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><blockquote><p>在config.json里配置你的端口号（默认是8086）</p></blockquote><h2 id="插件示例" tabindex="-1"><a class="header-anchor" href="#插件示例" aria-hidden="true">#</a> 插件示例</h2><blockquote><p>我们在项目中创建一个名为PluginDemo01.go的go文件 并复制以下代码 (名称可以随意)</p></blockquote><div class="language-golang line-numbers-mode" data-ext="golang"><pre class="language-golang"><code>
package main

import (
	&quot;github.com/gorilla/websocket&quot;
	&quot;github.com/idun886/GoBot/Context&quot;
)

type PluginDemo01 struct {
	Context string
	Conn    *websocket.Conn
}

func (p *PluginDemo01) PluginFunc() {
	plugindemo01 := Context.Message{Context: p.Context, Conn: p.Conn} //将插件结构体中的 Context 和 Conn 依赖 传给Message类供他解析
	plugindemo01.ExplainMessage()                                     //解析 go-cqhttp传来的消息并赋值给 Message结构体中
	plugindemo01.On_Keyword(&quot;hello&quot;, &quot;hello,world!&quot;)                  //检测关键字方法  输入hello,机器人回复hello,world
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>我们在 Registered.go 注册插件的文件里添加以下代码</p></blockquote><div class="language-golang line-numbers-mode" data-ext="golang"><pre class="language-golang"><code>package main

import (
	&quot;github.com/gorilla/websocket&quot;
)

func RegisteredPlugins(conn *websocket.Conn, context string) {

    plugindemo01 := PluginDemo01{Context: context,Conn: conn}  \\\\注册插件，并传参
	plugindemo01.PluginFunc()                                  \\\\调用插件的方法

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="构建运行" tabindex="-1"><a class="header-anchor" href="#构建运行" aria-hidden="true">#</a> 构建运行</h2><blockquote><p>运行main.go文件 可以直接 go build main.go打包 或者 在goland直接运行 <img src="`+t+'" alt=""></p></blockquote><hr><blockquote><p>发送hello 回复hello,world</p><p><img src="'+c+'" alt=""></p></blockquote>',23),g=[u];function m(v,b){return n(),i("div",null,g)}const h=e(r,[["render",m],["__file","Begin.html.vue"]]);export{h as default};
