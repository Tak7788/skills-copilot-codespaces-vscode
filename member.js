function skillsMember(){
    return {
        restrict   : 'E',
        templateUrl: 'modules/skills/member.html',
        contoroller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope:{
            member: '='
        }
    };
}