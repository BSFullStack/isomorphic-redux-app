/**
 * 发表话题
 */
import  React , { Component } from 'react';
import mditor from 'mditor';
import TopHeader from './ui/topicDetail/TopHeader';
import Question from './ui/topicDetail/Question';
import Header from './layout/Header';
import AnswersWidget from './ui/topicDetail/widgets/Answers'
import AnswersDetail from './ui/topicDetail/Answers';
export default class Publish extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        const { answerEditor } = this.refs;
        setTimeout(()=>{
            new Mditor(answerEditor,{
                height:300
            });
        },0);
    }
    render(){

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
                            <input id="myTitle" type="text" name="title" required="" data-error="" autoComplete="off" className="form-control tagClose input-lg" placeholder="标题：一句话说清问题，用问号结尾" value="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="title" className="sr-only">标题</label>
                            <input id="myTitle" type="text" name="title" required="" data-error="" autoComplete="off" className="form-control tagClose input-lg" placeholder="标题：一句话说清问题，用问号结尾" value="" />
                        </div>
                        <div id="questionText" className="editor editMode" style={{minHeight:"203px"}}>
                            <div className="editor" id="questionText">
                                <textarea ref="answerEditor" name="text"
                                    className="form-control" rows="4"
                                        ></textarea>
                            </div>
                        </div>
                        <div className="operations mt20">
                            <div className="pull-right">
                                <button data-type="question" id="publishIt" className="btn btn-primary btn-lg ml10" data-id="" data-do="" data-url=""
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
    handlerClick(){

    }
}
