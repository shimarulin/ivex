import Vue from 'vue'

import Affix from 'iview/src/components/affix'
import Alert from 'iview/src/components/alert'
import Anchor from 'iview/src/components/anchor'
import AnchorLink from 'iview/src/components/anchor-link'
import AutoComplete from 'iview/src/components/auto-complete'
import Avatar from 'iview/src/components/avatar'
import BackTop from 'iview/src/components/back-top'
import Badge from 'iview/src/components/badge'
import Breadcrumb from 'iview/src/components/breadcrumb'
import Button from 'iview/src/components/button'
import Card from 'iview/src/components/card'
import Carousel from 'iview/src/components/carousel'
import Cascader from 'iview/src/components/cascader'
import Cell from 'iview/src/components/cell'
import Checkbox from 'iview/src/components/checkbox'
import Circle from 'iview/src/components/circle'
import Collapse from 'iview/src/components/collapse'
import ColorPicker from 'iview/src/components/color-picker'
import Content from 'iview/src/components/content'
import DatePicker from 'iview/src/components/date-picker'
import Divider from 'iview/src/components/divider'
import Drawer from 'iview/src/components/drawer'
import Dropdown from 'iview/src/components/dropdown'
import Footer from 'iview/src/components/footer'
import Form from 'iview/src/components/form'
import Header from 'iview/src/components/header'
import Icon from 'iview/src/components/icon'
import Input from 'iview/src/components/input'
import InputNumber from 'iview/src/components/input-number'
import Scroll from 'iview/src/components/scroll'
import Split from 'iview/src/components/split'
import Layout from 'iview/src/components/layout'
import LoadingBar from 'iview/src/components/loading-bar'
import Menu from 'iview/src/components/menu'
import Message from 'iview/src/components/message'
import Modal from 'iview/src/components/modal'
import Notice from 'iview/src/components/notice'
import Page from 'iview/src/components/page'
import Poptip from 'iview/src/components/poptip'
import Progress from 'iview/src/components/progress'
import Radio from 'iview/src/components/radio'
import Rate from 'iview/src/components/rate'
import Sider from 'iview/src/components/sider'
import Slider from 'iview/src/components/slider'
import Spin from 'iview/src/components/spin'
import Steps from 'iview/src/components/steps'
import Switch from 'iview/src/components/switch'
import Table from 'iview/src/components/table'
import Tabs from 'iview/src/components/tabs'
import Tag from 'iview/src/components/tag'
import Time from 'iview/src/components/time'
import Timeline from 'iview/src/components/timeline'
import TimePicker from 'iview/src/components/time-picker'
import Tooltip from 'iview/src/components/tooltip'
import Transfer from 'iview/src/components/transfer'
import Tree from 'iview/src/components/tree'
import Upload from 'iview/src/components/upload'
import { Row, Col } from 'iview/src/components/grid'
import { OptionGroup } from 'iview/src/components/select'

import '@/assets/styles/vendor/iview/index.less'

// For compatible with vue-i18n@6.x+
Vue.locale = () => {}

const components = {
  Affix,
  Alert,
  Anchor,
  AnchorLink,
  AutoComplete,
  Avatar,
  BackTop,
  Badge,
  Breadcrumb,
  BreadcrumbItem: Breadcrumb.Item,
  Button,
  ButtonGroup: Button.Group,
  Card,
  Carousel,
  CarouselItem: Carousel.Item,
  Cascader,
  Cell,
  CellGroup: Cell.Group,
  Checkbox,
  CheckboxGroup: Checkbox.Group,
  Col,
  Collapse,
  ColorPicker,
  Content: Content,
  DatePicker,
  Divider,
  Drawer,
  Dropdown,
  DropdownItem: Dropdown.Item,
  DropdownMenu: Dropdown.Menu,
  Footer: Footer,
  Form,
  FormItem: Form.Item,
  Header: Header,
  Icon,
  Input,
  InputNumber,
  Scroll,
  Sider: Sider,
  Split,
  Submenu: Menu.Sub,
  Layout: Layout,
  LoadingBar,
  Menu,
  MenuGroup: Menu.Group,
  MenuItem: Menu.Item,
  Message,
  Modal,
  Notice,
  OptionGroup,
  Page,
  Panel: Collapse.Panel,
  Poptip,
  Progress,
  Radio,
  RadioGroup: Radio.Group,
  Rate,
  Row,
  Slider,
  Spin,
  Step: Steps.Step,
  Steps,
  Table,
  Tabs: Tabs,
  TabPane: Tabs.Pane,
  Tag,
  Time,
  Timeline,
  TimelineItem: Timeline.Item,
  TimePicker,
  Tooltip,
  Transfer,
  Tree,
  Upload,
}

const iview = {
  ...components,

  iButton: Button,
  iCircle: Circle,
  iCol: Col,
  iContent: Content,
  iForm: Form,
  iFooter: Footer,
  iHeader: Header,
  iInput: Input,
  iMenu: Menu,
  iProgress: Progress,
  iSwitch: Switch,
  iTable: Table,
  iTime: Time,

  IButton: Button,
  ICircle: Circle,
  ICol: Col,
  IContent: Content,
  IForm: Form,
  IFooter: Footer,
  IHeader: Header,
  IInput: Input,
  IMenu: Menu,
  IProgress: Progress,
  ISwitch: Switch,
  ITable: Table,
  ITime: Time,
}

Object.keys(iview).forEach(key => {
  Vue.component(key, iview[key])
})

Vue.prototype.$IVIEW = {
  size: '',
  transfer: '',
}

Vue.prototype.$Loading = LoadingBar
Vue.prototype.$Message = Message
Vue.prototype.$Modal = Modal
Vue.prototype.$Notice = Notice
Vue.prototype.$Spin = Spin
