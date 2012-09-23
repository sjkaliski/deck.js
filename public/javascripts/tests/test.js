describe('My Sickass Endpoints', function(){
  it('should create users correctly', function(){
    $.ajax({
      type:'POST',
      url:'/tables/505ec926ec8fa1c8f0000004/users',
      success: function(data){ 
        expect(data.success).to.equal(true);
      }
    });
  });
  it('should know when user creation fails', function(){
    $.ajax({
      type:'POST',
      url:'/tables/505ec926ec8fa1c8f00000047896786/users',
      success: function(data){
        expect(data.success).to.equal(false);
      }
    });
  });
  it('should create tables correctly', function(){
    $.ajax({
      type:'POST',
      url:'/tables',
      success: function(data){
        expect(data.success).to.equal(true);
      }
    }); 
  });
});