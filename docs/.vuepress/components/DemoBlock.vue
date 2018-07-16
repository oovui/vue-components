<script>
export default {
  name:'DemoBlock',
  render(h){

    console.log(this.$slots.default);
    console.log(this.$slots.default[0]);
    console.log(this.$slots.default[0].componentOptions);
    
    return h('div',{
      'class':'code'
    },[
      h('div',{
        'class':'code--title'
      },[
        h('h2',this.title),
        h('small',this.description)
      ]),
      h('div',{
        'class':'code--demo'
      },[
        h('div',{
          'class':'code-content'
        },this.$slots.default)
      ]),
      h('div',{
        'class':'code--segment'
      },[
        h('highlight-code',{
          props:{
            'lang':'vue'
          }
        }, this.$slots.default[0].tag)
      ])
    ])
  },
  props:['title','description','code']
}
</script>

<style lang="less" scoped>
.code {
  .code--title {
    h2 {
      padding: 0;
      margin: 0;
      border-bottom: none;
      font-size: 22px;
    }

    small {
      font-size: 14px;
      display: inline-block;
      margin: 10px 0;
      color: #5e6d82;
    }
  }
  .code--demo {
    border: 1px solid #ebebeb;
    border-bottom: none;
    border-radius: 3px;
    box-shadow: 0 0 2px 0 rgba(232, 237, 250, 0.6),
      0 1px 2px 0 rgba(232, 237, 250, 0.5);
    .code-content {
      display: flex;
      //justify-content: center;
      justify-content: space-around;
      align-items: center;
      box-sizing: border-box;
      padding: 4%;
      border-bottom: 1px solid #ddd;
    }
  }
  .code--segment{
    background: #282a36!important;
  }
  .code--button {
    background: #fafbfc;
    color: #409eff;
    font-weight: 400;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
      0 2px 4px 0 rgba(232, 237, 250, 0.5);
    &:hover {
      font-size: 17px;
    }
  }

  & + .code {
    margin-top: 40px;
  }

  &:not(:first-child) {
    margin-top: 10px;
  }
}
</style>

