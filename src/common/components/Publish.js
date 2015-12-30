/**
 * 发表话题
 */
import  React , { Component } from 'react';

export default class Publish extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
       const uieditor = new Simditor({
            textarea: $('#contents'),
            placeholder: '这里输入文字...',
            toolbar: [
                'title'
                ,'bold'
                ,'italic'
                ,'underline'
                ,'strikethrough'
                ,'|'
                ,'ol'
                ,'ul'
                ,'indent'
                ,'outdent'
                ,'|'
                ,'blockquote'
                ,'link'
                ,'image'
                ,'code'
            ],
            tabIndent: true,        // 是否在编辑器中使用 tab 键来缩进
            upload: {
                url: '/upload?act=publis',
                connectionCount : 3,
                leaveConfirm : '正在上传中, 请稍候...',
            },
            toolbarFloat: true      // 是否让工具栏按钮在页面滚动的过程中始终可见
        });
    }
    render(){

        return (
            <div id="postTextArea" className="postTextArea g-bd2">
                <div className="g-bdc">
                    <div className="g-mn">
                        <div className="g-box3">
                            <h2 className="w-fttl">发布新话题</h2>
                        </div>
                        <div className="g-box2">
                            <h3 className="w-ttl">
                                <em>标题</em>
                                <small>
                                    (可不填)
                                </small>
                            </h3>
                            <input id="blogTittle" maxLength="50" className="w-inputxt w-inputxt-1" type="text" />
                        </div>
                        <div className="g-box2">
                            <h3 className="w-ttl"><em>内容</em></h3>
                        </div>
                        {/**富文本编辑器**/}
                        <div className="g-box2 content-g-box2" >
                             <textarea id="contents"  data-autosave="editor-content"></textarea>
                        </div>
                        <div className="g-box2">
                            <div className="m-edtact">
                                <input type="button" className="w-bbtn delete ztag" value="取　消"/>
                                <input type="button" className="w-bbtn w-bbtn-0 publish ztag" value="发　布" onClick={::this.handlerClick}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    handlerClick(){

    }
}
