/**
 * 发表话题
 */
import  React , { Component } from 'react';
import _ from 'lodash';
import TopHeader from './ui/topicDetail/TopHeader';
import Question from './ui/topicDetail/Question';
import Header from './layout/Header';
import AnswersWidget from './ui/topicDetail/widgets/Answers'
import AnswersDetail from './ui/topicDetail/Answers';
import { Select } from 'antd';
const Option = Select.Option;


export default class Publish extends Component {
    constructor(props){
        super(props);
        this.state={
            title:""
        }
        this.tagIds = [];
    }
    componentDidMount(){
        const { answerEditor } = this.refs;
        setTimeout(()=>{
            this.mdeditor = new Mditor(answerEditor,{
                height:300
            });
        },0);
    }
    componentWillReceiveProps(nextProps){

        const { bl, msg , error } = nextProps.publishInfo;
        //发布成功

        if(  bl == 1  ){
           return this.props.history.push("/topics/");
        }

    }
    render(){
        const { tags = [] } = this.props.publishInfo;

        const { title } = this.state;

        let children = tags.map(tag=>{
            const { id , name } = tag;
            return <Option key={id} data-id={id}>{name}</Option>;
        })
        return (
            <div className="qa-ask">
                <Header />
                <div className="wrap publish">
                    <div className="container">
                        <h1 className="h4 mt20">
                            提问题
                            <input type="hidden" value="1220000004315446" id="draftId" />
                            <input type="hidden" value="0" name="site" id="siteId" />
                        </h1>
                        <div className="form-group">
                            <label htmlFor="title" className="sr-only">标题</label>
                            <input id="myTitle" ref='titleInput' data-required={true} onChange={::this.onChange} type="text" name="title" required="" data-error="" autoComplete="off" className="form-control tagClose input-lg" placeholder="标题：一句话说清问题，用问号结尾" value={title} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="title" className="sr-only">标题</label>
                            <Select multiple
                                ref="tagscomponet"
                                style={{width: '100%'}}
                                searchPlaceholder="标签"
                                notFoundContent={"暂无标签"}
                                onChange={::this.tagsComponetChange}
                               >
                               {children}
                              </Select>
                        </div>
                        <div id="questionText" className="editor editMode" style={{minHeight:"203px"}}>
                            <div className="editor" id="questionText">
                                <textarea ref='answerEditor' name="text" className="form-control" rows="4"></textarea>
                            </div>
                        </div>
                        <div className="operations mt20">
                            <div className="pull-right">
                                <button data-type="question" onClick={::this.handlerSubmit} id="publishIt" className="btn btn-primary btn-lg ml10" data-id="" data-do="" data-url=""
                                    data-text="发布问题" data-name="">
                                    发布问题
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
    tagsComponetChange(value,label){
        this.tagIds = value;
    }
    handlerSubmit(){
        const {
            titleInput
        } = this.refs;
        //获取问题名称
        const title =  _.trim(titleInput.value);
        //获取问题内容
        const content = _.trim(this.mdeditor.getValue());
        //获取选择标签()
        const tagId = this.tagIds.join(",");

        this.props.doPublish({
            title,
            content,
            tagId,
            r:Math.random()
        });
    }
    onChange(e){
        this.setState({
            title: (e.target && e.target.value) || ""
        });
    }
}
