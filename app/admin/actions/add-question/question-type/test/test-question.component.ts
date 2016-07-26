import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {MaterializeDirective} from "angular2-materialize";
import {TestQuestion} from "./test-question.class";

@Component({
    selector: 'test-question-component',
    templateUrl: 'app/admin/actions/add-question/question-type/test/test-question.html',
    directives: [ROUTER_DIRECTIVES, MaterializeDirective]
})

export class TestQuestionComponent implements OnInit {

    private question:TestQuestion;
    private oldAnswersLength:number;

    ngOnInit():any {
        this.oldAnswersLength = this.question.answers.length;
    }

    constructor() {
        this.question = new TestQuestion();
        this.oldAnswersLength = this.question.answers.length;
    }

    resizeAnswers() {
        if (this.oldAnswersLength < 2 || this.oldAnswersLength > 5) {
            return;
        }
        let diff = this.oldAnswersLength - this.question.answers.length;
        if (this.oldAnswersLength > this.question.answers.length) {
            for (let i = 0; i < diff; ++i) {
                this.question.answers.push({content: ''});
            }
        } else if (this.oldAnswersLength < this.question.answers.length) {
            for (let i = 0; i < -diff; ++i) {
                this.question.answers.splice(this.question.answers.length - 1, 1);
            }
        }
        this.oldAnswersLength = this.question.answers.length;
    }

    changeCorrectAnswerIdx() {
        if (this.question.correctAnswerIdx < 1 || this.question.correctAnswerIdx > this.oldAnswersLength) {
            return;
        }
        this.question.correctAnswerIdx--;
    }

    onCreateFinish() {
        console.log(this.question);
    }
}